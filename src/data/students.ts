import { Student } from '../types';

export const studentsData: Student[] = [
  { id: 1001, name: "أحمد محمد علي", category: "3", grade: 95 },
  { id: 1002, name: "فاطمة إبراهيم حسن", category: "3", grade: 88 },
  { id: 1003, name: "عمر حسن محمود", category: "5", grade: 92 },
  { id: 1004, name: "نور الدين أحمد", category: "8", grade: 85 },
  { id: 1005, name: "عبدالغفار محمود فارس", category: "10", grade: 87 },
  { id: 1006, name: "مريم سالم يوسف", category: "15", grade: 91 },
  { id: 1007, name: "حسام النجار", category: "20", grade: 89 },
  { id: 1008, name: "ليلى الخطيب", category: "25", grade: 94 },
  
  { id: 2001, name: "يوسف الأحمد", category: "30", grade: 97 },
  { id: 2002, name: "زينب محمد", category: "15", grade: 89 },
  { id: 2003, name: "خالد عبدالله", category: "20", grade: 94 },
  { id: 2004, name: "آية حسام", category: "25", grade: 91 },
  { id: 2005, name: "محمد الطيب", category: "30", grade: 98 }
];

// Add ranks to students based on their grades
export const rankedStudents = studentsData
  .sort((a, b) => b.grade - a.grade)
  .map((student, index) => ({
    ...student,
    rank: index + 1
  }));