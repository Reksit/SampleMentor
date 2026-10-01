// Mock Data for College Student Growth Monitoring System

const mockData = {
    // 12 Growth Criteria
    criteria: [
        { id: 1, name: 'Coding Problems Solved', maxMarks: 10, category: 'Technical' },
        { id: 2, name: 'Open-Source Contribution', maxMarks: 5, category: 'Technical' },
        { id: 3, name: 'Competition Achievement', maxMarks: 3, category: 'Achievement' },
        { id: 4, name: 'Certification Achievements', maxMarks: 6, category: 'Achievement' },
        { id: 5, name: 'Competitive Programming Rating', maxMarks: 9, category: 'Technical' },
        { id: 6, name: 'Project/Product/Publication/Patent', maxMarks: 5, category: 'Innovation' },
        { id: 7, name: 'External Aptitude & Communication', maxMarks: 3, category: 'Soft Skills' },
        { id: 8, name: 'Monthly Coding Assessment', maxMarks: 10, category: 'Assessment' },
        { id: 9, name: 'GATE & Higher Studies', maxMarks: 3, category: 'Academic' },
        { id: 10, name: 'Internship/Industry Achievements', maxMarks: 4, category: 'Career' },
        { id: 11, name: 'Foreign Language Proficiency', maxMarks: 3, category: 'Skills' },
        { id: 12, name: 'Hundred Days Training', maxMarks: 1, category: 'Training' }
    ],

    // Students
    students: [
        {
            id: 1,
            name: 'Rajesh Kumar',
            rollNumber: '21CS101',
            registerNumber: 'REG2021CS001',
            department: 'Computer Science',
            year: 3,
            class: 'CSE-A',
            section: 'A',
            mentorId: 1,
            email: 'rajesh@college.edu',
            phone: '9876543210'
        },
        {
            id: 2,
            name: 'Priya Sharma',
            rollNumber: '21CS102',
            registerNumber: 'REG2021CS002',
            department: 'Computer Science',
            year: 3,
            class: 'CSE-A',
            section: 'A',
            mentorId: 1,
            email: 'priya@college.edu',
            phone: '9876543211'
        },
        {
            id: 3,
            name: 'Amit Patel',
            rollNumber: '21CS103',
            registerNumber: 'REG2021CS003',
            department: 'Computer Science',
            year: 3,
            class: 'CSE-B',
            section: 'B',
            mentorId: 2,
            email: 'amit@college.edu',
            phone: '9876543212'
        },
        {
            id: 4,
            name: 'Sneha Reddy',
            rollNumber: '21IT101',
            registerNumber: 'REG2021IT001',
            department: 'Information Technology',
            year: 3,
            class: 'IT-A',
            section: 'A',
            mentorId: 3,
            email: 'sneha@college.edu',
            phone: '9876543213'
        }
    ],

    // Mentors
    mentors: [
        {
            id: 1,
            name: 'Dr. Suresh Kumar',
            employeeId: 'EMP001',
            department: 'Computer Science',
            email: 'suresh@college.edu',
            phone: '9876540001'
        },
        {
            id: 2,
            name: 'Prof. Anita Singh',
            employeeId: 'EMP002',
            department: 'Computer Science',
            email: 'anita@college.edu',
            phone: '9876540002'
        },
        {
            id: 3,
            name: 'Dr. Ramesh Verma',
            employeeId: 'EMP003',
            department: 'Information Technology',
            email: 'ramesh@college.edu',
            phone: '9876540003'
        }
    ],

    // Student Progress (marks per criterion)
    studentProgress: [
        { studentId: 1, criterionId: 1, currentMarks: 7, maxMarks: 10 },
        { studentId: 1, criterionId: 2, currentMarks: 3, maxMarks: 5 },
        { studentId: 1, criterionId: 3, currentMarks: 2, maxMarks: 3 },
        { studentId: 1, criterionId: 4, currentMarks: 4, maxMarks: 6 },
        { studentId: 1, criterionId: 5, currentMarks: 6, maxMarks: 9 },
        { studentId: 1, criterionId: 6, currentMarks: 3, maxMarks: 5 },
        { studentId: 1, criterionId: 7, currentMarks: 2, maxMarks: 3 },
        { studentId: 1, criterionId: 8, currentMarks: 8, maxMarks: 10 },
        { studentId: 1, criterionId: 9, currentMarks: 1, maxMarks: 3 },
        { studentId: 1, criterionId: 10, currentMarks: 2, maxMarks: 4 },
        { studentId: 1, criterionId: 11, currentMarks: 0, maxMarks: 3 },
        { studentId: 1, criterionId: 12, currentMarks: 1, maxMarks: 1 },

        { studentId: 2, criterionId: 1, currentMarks: 8, maxMarks: 10 },
        { studentId: 2, criterionId: 2, currentMarks: 4, maxMarks: 5 },
        { studentId: 2, criterionId: 3, currentMarks: 3, maxMarks: 3 },
        { studentId: 2, criterionId: 4, currentMarks: 5, maxMarks: 6 },
        { studentId: 2, criterionId: 5, currentMarks: 7, maxMarks: 9 },
        { studentId: 2, criterionId: 6, currentMarks: 4, maxMarks: 5 },
        { studentId: 2, criterionId: 7, currentMarks: 3, maxMarks: 3 },
        { studentId: 2, criterionId: 8, currentMarks: 9, maxMarks: 10 },
        { studentId: 2, criterionId: 9, currentMarks: 2, maxMarks: 3 },
        { studentId: 2, criterionId: 10, currentMarks: 3, maxMarks: 4 },
        { studentId: 2, criterionId: 11, currentMarks: 2, maxMarks: 3 },
        { studentId: 2, criterionId: 12, currentMarks: 1, maxMarks: 1 }
    ],

    // Weekly Updates
    weeklyUpdates: [
        {
            id: 1,
            studentId: 1,
            criterionId: 1,
            weekNumber: 1,
            activity: 'Solved 50 LeetCode problems',
            description: 'Completed 50 problems on LeetCode covering arrays, strings, and dynamic programming',
            proofUrl: 'https://leetcode.com/profile/rajesh',
            submittedDate: '2024-09-05',
            status: 'APPROVED',
            marks: 2,
            reviewerComment: 'Excellent progress!',
            reviewDate: '2024-09-06'
        },
        {
            id: 2,
            studentId: 1,
            criterionId: 2,
            weekNumber: 2,
            activity: 'Contributed to Open Source Project',
            description: 'Fixed 3 bugs in React open source library',
            proofUrl: 'https://github.com/rajesh/pull/123',
            submittedDate: '2024-09-12',
            status: 'PENDING_REVIEW',
            marks: null,
            reviewerComment: null,
            reviewDate: null
        },
        {
            id: 3,
            studentId: 1,
            criterionId: 3,
            weekNumber: 1,
            activity: 'Won Hackathon',
            description: 'First place in National level hackathon',
            proofUrl: 'certificate.pdf',
            submittedDate: '2024-09-08',
            status: 'REJECTED',
            marks: 0,
            reviewerComment: 'Please upload the official certificate',
            reviewDate: '2024-09-09'
        },
        {
            id: 4,
            studentId: 2,
            criterionId: 1,
            weekNumber: 1,
            activity: 'Solved 75 coding problems',
            description: 'Completed problems on multiple platforms',
            proofUrl: 'screenshots.zip',
            submittedDate: '2024-09-04',
            status: 'APPROVED',
            marks: 3,
            reviewerComment: 'Great work!',
            reviewDate: '2024-09-05'
        }
    ],

    // Departments
    departments: [
        { id: 1, name: 'Computer Science', code: 'CSE' },
        { id: 2, name: 'Information Technology', code: 'IT' },
        { id: 3, name: 'Electronics & Communication', code: 'ECE' },
        { id: 4, name: 'Mechanical Engineering', code: 'MECH' }
    ]
};

// Helper functions
function getStudentById(id) {
    return mockData.students.find(s => s.id === id);
}

function getStudentProgress(studentId) {
    return mockData.studentProgress.filter(p => p.studentId === studentId);
}

function getStudentUpdates(studentId) {
    return mockData.weeklyUpdates.filter(u => u.studentId === studentId);
}

function getMentorStudents(mentorId) {
    return mockData.students.filter(s => s.mentorId === mentorId);
}

function getDepartmentStudents(department) {
    return mockData.students.filter(s => s.department === department);
}

function getUpdatesByStatus(status) {
    return mockData.weeklyUpdates.filter(u => u.status === status);
}

function getTotalMarks(studentId) {
    const progress = getStudentProgress(studentId);
    return progress.reduce((sum, p) => sum + p.currentMarks, 0);
}

function getMaxPossibleMarks() {
    return mockData.criteria.reduce((sum, c) => sum + c.maxMarks, 0);
}

function getProgressPercentage(studentId) {
    const total = getTotalMarks(studentId);
    const max = getMaxPossibleMarks();
    return Math.round((total / max) * 100);
}
