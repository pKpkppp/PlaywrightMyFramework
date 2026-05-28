StudyGlobe.md
StudyGlobe – User Stories Document
Project Name

StudyGlobe Portal

Application URL

https://studyglobeuat.easysys.co.uk/

Objective

StudyGlobe is an education and student management platform designed to help students, agents, managers, and administrators manage the complete student admission lifecycle including lead management, applications, university selection, communication, document handling, reporting, and tracking.

User Roles
Admin
Manager
Counsellor
Agent
Student
Epic 1 – Authentication & Login Module
User Story 1.1 – Login to Portal

As a Manager/User
I want to log in to the StudyGlobe portal
So that I can access the system securely.

Acceptance Criteria
User can enter username and password.
User can click Login button.
Valid credentials should redirect to dashboard.
Invalid credentials should display validation message.
Password field should be masked.
User Story 1.2 – Forgot Password

As a User
I want to reset my password
So that I can regain access to my account.

Acceptance Criteria
Forgot Password option should be available.
Reset link should be sent to registered email.
User should be able to create a new password.
Epic 2 – Dashboard Module
User Story 2.1 – View Dashboard Summary

As a Manager
I want to view dashboard statistics
So that I can monitor student and application activities.

Acceptance Criteria
Dashboard should display total students.
Dashboard should display active applications.
Dashboard should display recent activities.
Dashboard widgets should load correctly.
User Story 2.2 – Quick Navigation

As a User
I want to quickly access major modules from dashboard
So that I can save time.

Acceptance Criteria
Dashboard should contain shortcut cards.
Clicking shortcut should redirect correctly.
User should only see permitted modules.
Epic 3 – Student Management Module
User Story 3.1 – Create Student Profile

As a Counsellor/Manager
I want to create a student profile
So that student information can be managed centrally.

Acceptance Criteria
User can add student basic details.
Mandatory fields should be validated.
Student profile should save successfully.
Duplicate email/mobile validation should work.
User Story 3.2 – Edit Student Information

As a User
I want to update student details
So that records remain accurate.

Acceptance Criteria
Existing data should be editable.
Updated information should save correctly.
Audit/history should be maintained.
User Story 3.3 – Search Student

As a User
I want to search students using filters
So that I can quickly locate records.

Acceptance Criteria
Search by name, email, phone, or ID.
Filters should return matching results.
Pagination should work correctly.
Epic 4 – Application Management Module
User Story 4.1 – Create Application

As a Counsellor
I want to create university applications for students
So that admission processing can begin.

Acceptance Criteria
User can select student.
User can select university and course.
Application status should be created.
Mandatory validation should work.
User Story 4.2 – Track Application Status

As a User
I want to monitor application progress
So that I know the current admission stage.

Acceptance Criteria
Status should display current stage.
Timeline/history should be visible.
Status updates should save successfully.
User Story 4.3 – Update Application Status

As a Manager/Admin
I want to update application statuses
So that admission workflow remains accurate.

Acceptance Criteria
User can change status.
Updated status should reflect immediately.
Notifications should trigger if configured.
Epic 5 – University Module
User Story 5.1 – View University List

As a User
I want to browse universities
So that I can recommend suitable options.

Acceptance Criteria
Universities should display in list/grid.
Search and filters should work.
University details page should open.
User Story 5.2 – Add University Details

As a Admin
I want to manage university information
So that data remains updated.

Acceptance Criteria
Admin can add/edit/delete universities.
Course details can be managed.
Changes should reflect in application module.
Epic 6 – Document Management Module
User Story 6.1 – Upload Student Documents

As a User
I want to upload documents
So that student applications can be processed.

Acceptance Criteria
User can upload PDF/JPG/PNG files.
File size validation should work.
Uploaded document should appear in list.
User Story 6.2 – Download Documents

As a User
I want to download uploaded documents
So that I can review them.

Acceptance Criteria
Download button should be visible.
File should open/download correctly.
Unauthorized users should not access files.
Epic 7 – Communication Module
User Story 7.1 – Send Emails

As a User
I want to send emails from portal
So that communication can be centralized.

Acceptance Criteria
Email compose option should be available.
User can select recipient.
Email should send successfully.
Email history should be stored.
User Story 7.2 – Notification Alerts

As a User
I want to receive notifications
So that I stay informed about updates.

Acceptance Criteria
Notifications should appear for major actions.
Unread/read status should work.
Notifications should be timestamped.
Epic 8 – Lead Management Module
User Story 8.1 – Create Lead

As a Counsellor
I want to create student leads
So that inquiries can be tracked.

Acceptance Criteria
User can add lead information.
Lead source can be selected.
Lead should appear in listing.
User Story 8.2 – Lead Status Tracking

As a User
I want to track lead stages
So that follow-up activities are manageable.

Acceptance Criteria
Lead stages should be configurable.
User can update lead status.
Activity log should be maintained.
Epic 9 – Reports & Analytics Module
User Story 9.1 – Generate Reports

As a Manager/Admin
I want to generate reports
So that I can analyze business performance.

Acceptance Criteria
Reports should support filters.
Export to Excel/PDF should work.
Data should display accurately.
User Story 9.2 – View Application Analytics

As a Manager
I want to monitor application trends
So that I can make informed decisions.

Acceptance Criteria
Graphs/charts should display correctly.
Data should update dynamically.
Filters should work properly.
Epic 10 – Role & Permission Management
User Story 10.1 – Manage User Roles

As a Admin
I want to assign roles and permissions
So that users access only authorized modules.

Acceptance Criteria
Admin can create/edit roles.
Permissions should be configurable.
Restricted pages should not be accessible.
User Story 10.2 – Module Access Control

As a User
I want to access only permitted modules
So that security is maintained.

Acceptance Criteria
Unauthorized menu items should be hidden.
Direct URL access should be blocked.
Session permissions should validate correctly.
Epic 11 – Settings Module
User Story 11.1 – Configure System Settings

As a Admin
I want to manage portal settings
So that the system works according to business requirements.

Acceptance Criteria
Admin can update configuration values.
Settings should save successfully.
Changes should reflect system-wide.
Epic 12 – Audit & Activity Logs
User Story 12.1 – View Activity Logs

As a Admin/Manager
I want to monitor user activities
So that system usage can be audited.

Acceptance Criteria
Logs should capture login/logout activities.
Logs should capture CRUD operations.
Filters should work correctly.
Non-Functional Requirements
Performance
Portal should load within acceptable response time.
Search operations should return results quickly.
Security
Passwords should be encrypted.
Session timeout should work.
Unauthorized access should be restricted.
Compatibility
Application should support Chrome, Edge, and Firefox.
Responsive UI should work on desktop and tablet.
Reliability
Data should save without corruption.
System should recover gracefully from errors.
Assumptions
Users have valid credentials.
Internet connectivity is available.
Required permissions are assigned.
Future Enhancements
WhatsApp Integration
AI-based University Recommendation
Mobile Application
Automated Email Campaigns
Student Document OCR Verification
Payment Gateway Integration
Real-time Chat Support
Conclusion

The StudyGlobe portal is designed to streamline student admission and application management processes for educational organizations, counsellors, and agents. The above user stories define the expected functionality and business workflows for successful platform operation.