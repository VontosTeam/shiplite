# ShipLite Test Plan

## 1. Navigation & Routing Tests

### 1.1 Navbar Links
- [ ] Home link (ShipLite logo) navigates to homepage
- [ ] Our Purpose link navigates to /our-purpose
- [ ] How It Works link navigates to /how-it-works
- [ ] Pricing link navigates to /pricing
- [ ] Track link navigates to /tracking
- [ ] Contact link navigates to /contact
- [ ] Book a Shipment button navigates to /booking

### 1.2 Homepage Links
- [ ] Hero section "Book a Shipment Now" button navigates to /booking
- [ ] Hero section "Track Your Shipment" button navigates to /tracking
- [ ] Tracking section "Track Now" button navigates to /tracking
- [ ] Flight Departures section "Book a Shipment Now" button navigates to /booking
- [ ] CTA section "Book a Shipment Now" button navigates to /booking
- [ ] CTA section "Learn How It Works" button navigates to /how-it-works

### 1.3 Footer Links
- [ ] Our Purpose link navigates to /our-purpose
- [ ] How It Works link navigates to /how-it-works
- [ ] Pricing & Shipping Options link navigates to /pricing
- [ ] Track Your Shipment link navigates to /tracking
- [ ] Flight Schedules link navigates to /schedule
- [ ] Store Partners & Drop-Off link navigates to /partners
- [ ] FAQs link navigates to /faq
- [ ] Prohibited & Regulated Items link navigates to /prohibited-items
- [ ] Terms & Conditions link navigates to /terms
- [ ] Privacy Policy link navigates to /privacy

## 2. Tracking Page Tests

### 2.1 Form Validation
- [ ] Empty tracking number shows error message
- [ ] Invalid tracking number format shows error message
- [ ] Non-existent tracking number shows "not found" error
- [ ] Valid tracking number (SL123456789) shows shipment details

### 2.2 Shipment Details Display
- [ ] Estimated delivery information is displayed correctly
- [ ] Timeline shows all events in correct order
- [ ] Timeline events show correct status (completed/pending)
- [ ] Timeline events show correct timestamps
- [ ] Timeline events show correct locations

### 2.3 Notification Toggles
- [ ] WhatsApp toggle can be switched on/off
- [ ] Viber toggle can be switched on/off
- [ ] SMS toggle can be switched on/off
- [ ] Toggle states persist during session

## 3. Booking Page Tests

### 3.1 Form Elements
- [ ] All required form fields are present
- [ ] Form validation works for required fields
- [ ] Date picker works correctly
- [ ] Time picker works correctly
- [ ] Location selectors work correctly

### 3.2 Form Submission
- [ ] Form can be submitted with valid data
- [ ] Error messages show for invalid data
- [ ] Success message shows after successful submission

## 4. Responsive Design Tests

### 4.1 Desktop View
- [ ] All elements are properly aligned
- [ ] Navigation menu is horizontal
- [ ] Cards and sections maintain proper spacing
- [ ] Images and icons are properly sized

### 4.2 Mobile View
- [ ] Mobile menu opens and closes correctly
- [ ] All elements are properly stacked
- [ ] Text is readable without horizontal scrolling
- [ ] Buttons and interactive elements are properly sized for touch

### 4.3 Tablet View
- [ ] Layout adapts appropriately
- [ ] Grid systems maintain proper alignment
- [ ] Navigation remains accessible

## 5. Performance Tests

### 5.1 Loading
- [ ] Pages load within 3 seconds
- [ ] Images load properly
- [ ] No console errors
- [ ] No layout shifts during loading

### 5.2 Interaction
- [ ] Buttons respond immediately to clicks
- [ ] Forms submit without delay
- [ ] Animations are smooth
- [ ] No freezing or lag during interaction

## 6. Cross-browser Tests

### 6.1 Browser Compatibility
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

## How to Run Tests

1. Start the development server:
   ```bash
   npm run dev
   ```

2. Open http://localhost:3000 in your browser

3. Follow the test cases in order, checking each item

4. Document any issues found:
   - Browser and version
   - Steps to reproduce
   - Expected behavior
   - Actual behavior
   - Screenshots if applicable

## Issue Reporting Format

```
Issue: [Brief description]
Browser: [Browser name and version]
Steps to Reproduce:
1. [Step 1]
2. [Step 2]
3. [Step 3]

Expected: [What should happen]
Actual: [What actually happens]
Screenshots: [If applicable]
```

## Notes

- Update this test plan when new features are added
- Add new test cases for bug fixes
- Document any workarounds or known issues
- Keep track of test results for each deployment 