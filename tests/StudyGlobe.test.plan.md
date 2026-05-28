# StudyGlobe Portal - Comprehensive Test Plan

## Application Overview

StudyGlobe is a Student Management Portal that enables managers to handle student profiles, document management, and university applications. The application supports manager role for student application management with features including student profile creation, document upload, and university application submission. This comprehensive test plan covers all critical functionalities following end-to-end QA workflow methodology.

## Test Scenarios

### 1. Phase 1: Requirement Understanding & Smoke Testing

**Seed:** `tests/seed.spec.ts`

#### 1.1. Smoke Test - Application Accessibility and Login

**File:** `tests/smoke-test-accessibility.spec.ts`

**Steps:**
  1. Navigate to StudyGlobe application at https://studyglobeuat.easysys.co.uk/
    - expect: Page loads successfully
    - expect: Login page displays with StudyGlobe branding
    - expect: Page title shows 'StudyGlobe - Student Management Portal'
  2. Verify login form elements are visible
    - expect: Username input field is visible
    - expect: Password input field is visible
    - expect: Sign In button is visible
    - expect: Welcome Back heading is displayed
  3. Enter valid credentials - Username: manager1, Password: password123
    - expect: Credentials are accepted without validation errors
    - expect: Form submission proceeds
  4. Click Sign In button and wait for page load
    - expect: User is authenticated successfully
    - expect: Redirected to dashboard page
    - expect: No error messages displayed
    - expect: Dashboard loads within 3 seconds
  5. Verify dashboard main elements
    - expect: Welcome message displays manager's name
    - expect: Navigation menu is visible
    - expect: Dashboard widgets/sections are loaded
    - expect: No console errors present

#### 1.2. Smoke Test - Module Navigation

**File:** `tests/smoke-test-navigation.spec.ts`

**Steps:**
  1. Login with valid manager credentials
    - expect: Login successful
    - expect: Dashboard displayed
  2. Verify all main navigation menu items are accessible
    - expect: Dashboard menu item visible
    - expect: Students menu item visible
    - expect: Applications menu item visible
    - expect: Documents section accessible
    - expect: Reports section visible
  3. Click on Students menu item
    - expect: Student module loads successfully
    - expect: Student list page displays
    - expect: Add Student button is visible
  4. Navigate back to Dashboard
    - expect: Dashboard loads successfully
    - expect: No errors during navigation
  5. Click on Applications menu item
    - expect: Applications module loads
    - expect: Applications list displays
    - expect: New Application button visible
  6. Verify logout functionality
    - expect: Logout button or user menu is visible
    - expect: Clicking logout ends session
    - expect: Redirected to login page
    - expect: Session is cleared

### 2. Phase 2: Authentication & Access Control Testing

**Seed:** `tests/seed.spec.ts`

#### 2.1. TC_AUTH_001 - Valid Manager Login

**File:** `tests/auth-valid-login.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Login page loads successfully
  2. Enter username: manager1 in the username field
    - expect: Username field accepts input
  3. Enter password: password123 in the password field
    - expect: Password field accepts input
    - expect: Password is masked for security
  4. Click the Sign In button
    - expect: Form is submitted
    - expect: Dashboard page loads
    - expect: No error messages shown
    - expect: User is authenticated
  5. Verify dashboard displays successfully
    - expect: Dashboard URL accessed
    - expect: Welcome message shows
    - expect: Manager menu items visible
    - expect: Session is active

#### 2.2. TC_AUTH_002 - Invalid Credentials Login

**File:** `tests/auth-invalid-credentials.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Login page loads
  2. Enter invalid username: invaliduser
    - expect: Username field accepts input
  3. Enter invalid password: wrongpass123
    - expect: Password field accepts input
  4. Click Sign In button
    - expect: Form submission attempted
    - expect: Error message displayed
    - expect: Error indicates invalid credentials
    - expect: User remains on login page
  5. Attempt to access dashboard directly
    - expect: Access denied
    - expect: Redirected back to login page
    - expect: Session not established

#### 2.3. TC_AUTH_003 - Empty Field Validation

**File:** `tests/auth-empty-fields.spec.ts`

**Steps:**
  1. Navigate to login page
    - expect: Login page loads
  2. Leave username field empty, enter password, click Sign In
    - expect: Validation error appears
    - expect: Error message: Username is required
    - expect: Form not submitted
    - expect: Remains on login page
  3. Enter username but leave password empty, click Sign In
    - expect: Validation error appears
    - expect: Error message: Password is required
    - expect: Form not submitted
    - expect: Remains on login page
  4. Leave both fields empty, click Sign In
    - expect: Validation errors for both fields
    - expect: Form not submitted

#### 2.4. TC_AUTH_004 - Session Security

**File:** `tests/auth-session-security.spec.ts`

**Steps:**
  1. Login with valid credentials
    - expect: Login successful
    - expect: Dashboard accessible
  2. Logout from the application
    - expect: Logout button clicked
    - expect: Session terminated
    - expect: Redirected to login page
  3. Try accessing dashboard URL directly in address bar
    - expect: Access denied
    - expect: Automatically redirected to login page
    - expect: Session token invalid
  4. Use browser back button after logout
    - expect: Dashboard not accessible
    - expect: Returned to login page
    - expect: Session not restored

### 3. Phase 3: Student Management Functional Testing

**Seed:** `tests/seed.spec.ts`

#### 3.1. TC_STUD_001 - Create Student with Mandatory Fields

**File:** `tests/student-create-mandatory.spec.ts`

**Steps:**
  1. Login with manager credentials
    - expect: Login successful
    - expect: Dashboard displayed
  2. Navigate to Student Module from menu
    - expect: Student list page loads
    - expect: Student table displays
    - expect: Add Student button visible
  3. Click Add Student button
    - expect: Student creation form opens
    - expect: All form fields visible
    - expect: Mandatory fields marked with asterisk
  4. Fill First Name: John
    - expect: Input accepted
    - expect: Field populated
  5. Fill Last Name: Doe
    - expect: Input accepted
  6. Fill Email: john.doe@test.com
    - expect: Input accepted
  7. Fill Phone: +44-1234567890
    - expect: Phone input accepted
  8. Fill Date of Birth: 01/01/2000
    - expect: Date input accepted
    - expect: Date format valid
  9. Select Nationality: United Kingdom
    - expect: Dropdown opens
    - expect: Selection made successfully
  10. Click Save button
    - expect: Form submitted
    - expect: Success message displayed: Student created successfully
    - expect: Student appears in student list
    - expect: Student details saved correctly
  11. Verify newly created student in list
    - expect: Student John Doe visible in list
    - expect: Student ID assigned
    - expect: Email visible
    - expect: Creation date recorded

#### 3.2. TC_STUD_002 - Email Validation During Student Creation

**File:** `tests/student-email-validation.spec.ts`

**Steps:**
  1. Login and navigate to Student Module
    - expect: Student module accessible
    - expect: Add Student form ready
  2. Fill all mandatory fields except email
    - expect: Fields populated successfully
  3. Enter invalid email: invalidemail
    - expect: Invalid email accepted in field (no real-time validation)
  4. Click Save button
    - expect: Form submission attempted
    - expect: Validation error triggered
    - expect: Error message: Please enter valid email format
    - expect: Student not created
    - expect: Form retained with data
  5. Clear email field and enter valid format: student@example.com
    - expect: Valid email accepted
  6. Click Save again
    - expect: Student created successfully
    - expect: New email saved

#### 3.3. TC_STUD_003 - Duplicate Email Prevention

**File:** `tests/student-duplicate-prevention.spec.ts`

**Steps:**
  1. Create first student with email: john@test.com
    - expect: Student created successfully
  2. Navigate to Add Student form again
    - expect: Fresh form displayed
  3. Fill all fields for second student but use same email: john@test.com
    - expect: Form fields accept duplicate email
  4. Click Save button
    - expect: Form submission attempted
    - expect: Error message: Email already exists in the system
    - expect: Duplicate student not created
    - expect: Form retained
  5. Change email to unique value and save
    - expect: Second student created successfully
    - expect: Unique email saved

#### 3.4. TC_STUD_004 - Student Profile Editing

**File:** `tests/student-edit-profile.spec.ts`

**Steps:**
  1. Login and navigate to Student Module
    - expect: Student list displayed
  2. Click on student record (John Doe)
    - expect: Student profile page opens
    - expect: All student details displayed
    - expect: Edit button visible
  3. Click Edit button
    - expect: Edit form opens
    - expect: All fields editable
    - expect: Current values populated
  4. Modify phone number to +44-9999999999
    - expect: Field updated
  5. Modify nationality to United States
    - expect: Selection changed
  6. Click Save button
    - expect: Changes saved successfully
    - expect: Success message displayed
    - expect: Profile updated with new values
  7. Navigate away and back to student profile
    - expect: Updated values persisted
    - expect: Phone and nationality changes retained

### 4. Phase 4: Document Management Testing

**Seed:** `tests/seed.spec.ts`

#### 4.1. TC_DOC_001 - Upload Valid PDF Document

**File:** `tests/document-upload-valid.spec.ts`

**Steps:**
  1. Login and create or select a student profile
    - expect: Student profile page open
  2. Navigate to Documents tab
    - expect: Documents section displays
    - expect: Upload document button visible
    - expect: Empty documents list shown initially
  3. Click Upload Document button
    - expect: File chooser dialog appears
  4. Select valid PDF file (Passport.pdf, 2MB size)
    - expect: File selected in dialog
  5. Confirm file selection and click Upload
    - expect: File upload initiated
    - expect: Upload progress shown
    - expect: Success message: Document uploaded successfully
  6. Verify document in list
    - expect: Document appears in documents list
    - expect: Document name shows: Passport.pdf
    - expect: Upload timestamp recorded
    - expect: File size displayed (2MB)
  7. Click on uploaded document
    - expect: Document can be downloaded
    - expect: File opens or downloads successfully

#### 4.2. TC_DOC_002 - Reject Invalid File Format

**File:** `tests/document-invalid-format.spec.ts`

**Steps:**
  1. Navigate to Documents upload section
    - expect: Upload section accessible
  2. Click Upload Document and select invalid file (script.exe)
    - expect: File selected
  3. Attempt to upload executable file
    - expect: Upload rejected
    - expect: Error message displayed: Only PDF, DOC, DOCX, JPG formats allowed
    - expect: File not stored
    - expect: Empty documents list maintained
  4. Select valid PDF file (Marksheet.pdf)
    - expect: File selected
  5. Upload valid file
    - expect: Upload successful
    - expect: Document added to list

#### 4.3. TC_DOC_003 - File Size Validation

**File:** `tests/document-size-validation.spec.ts`

**Steps:**
  1. Navigate to Documents upload section
    - expect: Upload section accessible
  2. Select file larger than 10MB limit
    - expect: File selected in dialog
  3. Attempt to upload oversized file (15MB)
    - expect: Upload rejected
    - expect: Error message: File size exceeds 10MB limit
    - expect: File not uploaded
    - expect: User prompted to select smaller file
  4. Select valid PDF file within size limit (5MB)
    - expect: File selected
  5. Upload valid sized file
    - expect: Upload successful
    - expect: Document stored and displayed

#### 4.4. TC_DOC_004 - Multiple Document Upload

**File:** `tests/document-multiple-upload.spec.ts`

**Steps:**
  1. Navigate to Documents section for student
    - expect: Documents area accessible
  2. Upload first document: Passport.pdf
    - expect: Document uploaded successfully
    - expect: Added to documents list
  3. Upload second document: Marksheet.pdf
    - expect: Second document uploaded
    - expect: Added to list
  4. Upload third document: VisaDocument.pdf
    - expect: Third document uploaded
    - expect: Added to list
  5. Verify all documents in list
    - expect: All three documents visible
    - expect: Each has name, size, timestamp
    - expect: Documents count shows 3
    - expect: All documents accessible
  6. Delete middle document (Marksheet.pdf)
    - expect: Document removed from list
    - expect: Two documents remain
    - expect: Deletion confirmed

### 5. Phase 5: Application Management & Submission

**Seed:** `tests/seed.spec.ts`

#### 5.1. TC_APP_001 - Submit Complete University Application

**File:** `tests/application-submit-complete.spec.ts`

**Steps:**
  1. Login with manager credentials
    - expect: Dashboard accessible
  2. Navigate to Applications Module
    - expect: Applications page loads
    - expect: Applications list displayed
    - expect: New Application button visible
  3. Click New Application button
    - expect: Application form opens
    - expect: All form sections visible
  4. Select Student: John Doe (with complete documents)
    - expect: Student dropdown opens
    - expect: Student selection made
  5. Select University: Oxford University
    - expect: University dropdown opens
    - expect: Selection confirmed
  6. Select Course: MSc Computer Science
    - expect: Course field populated
  7. Select Intake: September 2026
    - expect: Intake date selected
  8. Verify document checklist shows all required docs uploaded
    - expect: Passport document: checked
    - expect: Marksheets document: checked
    - expect: Other required docs: checked
  9. Enter application notes: Strong academic candidate
    - expect: Notes field accepts input
  10. Click Submit Application button
    - expect: Form submitted successfully
    - expect: Success message: Application submitted successfully
    - expect: Status changed to Submitted
    - expect: Timestamp recorded
    - expect: Application appears in list

#### 5.2. TC_APP_002 - Block Application with Missing Documents

**File:** `tests/application-missing-docs.spec.ts`

**Steps:**
  1. Navigate to Applications Module
    - expect: Applications page accessible
    - expect: New Application form ready
  2. Select student with incomplete documents (Jane Smith - missing Passport)
    - expect: Student selected
  3. Select University and Course
    - expect: Selections made
  4. Review document checklist
    - expect: Passport document: NOT checked (missing)
    - expect: Marksheets: checked (present)
  5. Click Submit Application button
    - expect: Form submission blocked
    - expect: Error message: Required documents missing - Passport
    - expect: Application not submitted
    - expect: Form retained with data
    - expect: User can upload missing document

#### 5.3. TC_APP_003 - Application Status Tracking

**File:** `tests/application-status-tracking.spec.ts`

**Steps:**
  1. Login and navigate to Applications Module
    - expect: Applications list displayed with multiple records
  2. Verify status column displays correct values
    - expect: Some applications show: Draft
    - expect: Some show: Submitted
    - expect: Some show: Under Review
    - expect: Some show: Shortlisted
    - expect: Some show: Rejected
  3. Click on submitted application to view details
    - expect: Application details page opens
    - expect: Current status displayed
    - expect: Timeline section visible
  4. View application timeline
    - expect: Timeline shows status changes
    - expect: Each entry has timestamp
    - expect: Draft -> Submitted transition shown
    - expect: All history entries accurate
  5. Filter applications by status: Submitted
    - expect: List filtered to show only Submitted applications
    - expect: Count displayed correctly
    - expect: Other statuses hidden
  6. Filter by status: Under Review
    - expect: List shows only Under Review applications
    - expect: Filter changed successfully

#### 5.4. TC_APP_004 - Application Validation Errors

**File:** `tests/application-validation.spec.ts`

**Steps:**
  1. Navigate to New Application form
    - expect: Form displayed
  2. Try to submit without selecting student
    - expect: Error message: Student is required
    - expect: Form not submitted
  3. Select student but don't select university
    - expect: Click Submit
  4. Submit without university selection
    - expect: Error message: University is required
    - expect: Form not submitted
  5. Fill all required fields correctly
    - expect: No validation errors
  6. Submit complete application
    - expect: Application submitted successfully

### 6. Phase 6: Dashboard & Navigation Testing

**Seed:** `tests/seed.spec.ts`

#### 6.1. TC_DASH_001 - Dashboard Overview Display

**File:** `tests/dashboard-overview.spec.ts`

**Steps:**
  1. Login with valid credentials
    - expect: Dashboard page loads successfully
  2. Verify welcome message displays manager's name
    - expect: Welcome text shows: Welcome, Manager Name
    - expect: Personalization working correctly
  3. Verify dashboard widgets are visible
    - expect: Total Students widget visible with count
    - expect: Pending Applications widget visible with count
    - expect: Documents Awaiting Upload widget visible
    - expect: Recent Activities widget visible
  4. Verify all counts are accurate
    - expect: Student count matches actual records
    - expect: Application count matches submitted apps
    - expect: Pending documents count accurate
  5. Verify Recent Activities list shows latest actions
    - expect: List displays recent activities
    - expect: Latest actions appear first
    - expect: Activity timestamps shown
  6. Click on a metric/widget
    - expect: Navigates to corresponding module
    - expect: Details view opens
    - expect: Metric link functional

#### 6.2. TC_DASH_002 - Navigation Menu Functionality

**File:** `tests/dashboard-navigation.spec.ts`

**Steps:**
  1. Login to dashboard
    - expect: Dashboard displayed
  2. Verify all menu items visible in sidebar
    - expect: Dashboard menu item visible
    - expect: Students menu item visible
    - expect: Applications menu item visible
    - expect: Documents menu item visible
    - expect: Reports menu item visible
    - expect: Settings menu item visible
  3. Click on Students menu
    - expect: Student module loads
    - expect: Student list displays
    - expect: Current page highlighted in menu
  4. Click on Applications menu
    - expect: Applications module loads
    - expect: Applications list displays
    - expect: Menu item highlighted
  5. Navigate through each menu item sequentially
    - expect: Each module loads correctly
    - expect: No navigation errors
    - expect: Breadcrumb shows current location
  6. Verify sub-menus expand/collapse
    - expect: Menu items with sub-items expand on click
    - expect: Sub-items display correctly
    - expect: Menu collapses when clicked again

#### 6.3. TC_DASH_003 - Logout Functionality

**File:** `tests/dashboard-logout.spec.ts`

**Steps:**
  1. Login with valid credentials
    - expect: Dashboard accessible
  2. Locate logout button/menu
    - expect: User profile button or logout menu visible
    - expect: Logout option accessible
  3. Click on logout button
    - expect: Logout action triggered
  4. Verify logout completion
    - expect: Session terminated successfully
    - expect: Redirected to login page
    - expect: No error messages
  5. Verify session is fully cleared
    - expect: Attempting to access dashboard directly redirects to login
    - expect: Browser back button does not show dashboard
    - expect: Session token cleared
  6. Try to access application URLs directly
    - expect: All restricted URLs redirect to login
    - expect: Session validation enforced

#### 6.4. TC_DASH_004 - UI Responsiveness

**File:** `tests/dashboard-responsiveness.spec.ts`

**Steps:**
  1. Login to dashboard
    - expect: Dashboard displayed
  2. Verify layout on desktop browser (1920x1080)
    - expect: All elements visible
    - expect: Layout aligned properly
    - expect: No overlapping elements
  3. Verify layout on tablet size (768x1024)
    - expect: Layout adapts to tablet size
    - expect: Menu collapses to hamburger if needed
    - expect: Content readable
  4. Verify layout on mobile size (375x667)
    - expect: Layout mobile-responsive
    - expect: Navigation accessible
    - expect: Content scrollable
    - expect: Touch-friendly buttons
  5. Navigate between modules on different screen sizes
    - expect: Navigation works on all sizes
    - expect: Content loads properly
