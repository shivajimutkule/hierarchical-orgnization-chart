export const EMPLOYEES = [
    { id: 1, name: 'John Doe', designation: 'Head of Engineering', email: 'john.doe@example.com', phone: '1234567890', manager: null },
    { id: 2, name: 'Mary Jane', designation: 'Engineering Manager', email: 'mary.jane@example.com', phone: '0987654321', manager: { id: 1, name: 'John Doe', designation: 'Developer', email: 'john.doe@example.com', phone: '1234567890', manager: null } },
    // Add more employee data here
  ];