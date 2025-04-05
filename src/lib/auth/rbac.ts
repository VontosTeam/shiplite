import { Session } from 'next-auth'

export enum Role {
  USER = 'USER',
  ADMIN = 'ADMIN',
  SUPPORT = 'SUPPORT'
}

export enum Permission {
  READ_BOOKINGS = 'READ_BOOKINGS',
  CREATE_BOOKING = 'CREATE_BOOKING',
  UPDATE_BOOKING = 'UPDATE_BOOKING',
  DELETE_BOOKING = 'DELETE_BOOKING',
  MANAGE_USERS = 'MANAGE_USERS',
  ACCESS_ADMIN = 'ACCESS_ADMIN',
  MANAGE_CONTENT = 'MANAGE_CONTENT'
}

const rolePermissions: Record<Role, Permission[]> = {
  [Role.USER]: [
    Permission.READ_BOOKINGS,
    Permission.CREATE_BOOKING
  ],
  [Role.SUPPORT]: [
    Permission.READ_BOOKINGS,
    Permission.UPDATE_BOOKING,
    Permission.MANAGE_CONTENT
  ],
  [Role.ADMIN]: [
    Permission.READ_BOOKINGS,
    Permission.CREATE_BOOKING,
    Permission.UPDATE_BOOKING,
    Permission.DELETE_BOOKING,
    Permission.MANAGE_USERS,
    Permission.ACCESS_ADMIN,
    Permission.MANAGE_CONTENT
  ]
}

export function hasPermission(session: Session | null, permission: Permission): boolean {
  if (!session?.user?.role) return false
  const userRole = session.user.role as Role
  return rolePermissions[userRole]?.includes(permission) || false
}

export function requirePermission(permission: Permission) {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value

    descriptor.value = function (...args: any[]) {
      const session = args[0]?.session // Assuming first arg is { session }
      if (!hasPermission(session, permission)) {
        throw new Error('Unauthorized')
      }
      return originalMethod.apply(this, args)
    }

    return descriptor
  }
} 