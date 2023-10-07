import express from "express";
import { academicDepartmentRoutes } from "../modules/academicDepartment/academicDepartment.routes";
import { academicFacultyRoutes } from "../modules/academicFaculty/academicFaculty.routes";
import { academicSemesterRoutes } from "../modules/academicSemester/academicSemester.routes";
import { adminRoutes } from "../modules/admin/admin.routes";
import { authRoutes } from "../modules/auth/auth.routes";
import { buildingRoutes } from "../modules/building/building.routes";
import { courseRoutes } from "../modules/course/course.routes";
import { facultyRoutes } from "../modules/faculty/faculty.routes";
import { managementDepartmentRoutes } from "../modules/managementDepartment/managementDepartment.routes";
import { offeredCourseRoutes } from "../modules/offeredCourse/offeredCourse.routes";
import { offeredCourseClassScheduleRoutes } from "../modules/offeredCourseClassSchedule/offeredCourseClassSchedule.routes";
import { offeredCourseSectionRoutes } from "../modules/offeredCourseSection/offeredCourseSection.routes";
import { roomRoutes } from "../modules/room/room.routes";
import { semesterRegistrationRoutes } from "../modules/semesterRegistration/semesterRegistration.routes";
import { studentRoutes } from "../modules/student/student.routes";
import { studentEnrolledCourseRoutes } from "../modules/studentEnrolledCourse/studentEnrolledCourse.routes";
import { studentEnrolledCourseMarkRoutes } from "../modules/studentEnrolledCourseMark/studentEnrolledCourseMark.routes";
import { studentSemesterPaymentRoutes } from "../modules/studentSemesterPayment/studentSemesterPayment.routes";
import { userRoutes } from "../modules/user/user.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    routes: authRoutes,
  },
  {
    path: "/users",
    routes: userRoutes,
  },
  {
    path: "/faculty",
    routes: facultyRoutes,
  },
  {
    path: "/student",
    routes: studentRoutes,
  },
  {
    path: "/academic-faculty",
    routes: academicFacultyRoutes,
  },
  {
    path: "/academic-department",
    routes: academicDepartmentRoutes,
  },
  {
    path: "/academic-semester",
    routes: academicSemesterRoutes,
  },
  {
    path: "/building",
    routes: buildingRoutes,
  },
  {
    path: "/room",
    routes: roomRoutes,
  },
  {
    path: "/course",
    routes: courseRoutes,
  },
  {
    path: "/semester-registration",
    routes: semesterRegistrationRoutes,
  },
  {
    path: "/offered-courses",
    routes: offeredCourseRoutes,
  },
  {
    path: "/offered-course-sections",
    routes: offeredCourseSectionRoutes,
  },
  {
    path: "/offered-course-class-schedules",
    routes: offeredCourseClassScheduleRoutes,
  },
  {
    path: "/student-enrolled-courses",
    routes: studentEnrolledCourseRoutes,
  },
  {
    path: "/student-enrolled-course-marks",
    routes: studentEnrolledCourseMarkRoutes,
  },
  {
    path: "/student-semester-payments",
    routes: studentSemesterPaymentRoutes,
  },
  {
    path: "/management-department",
    routes: managementDepartmentRoutes,
  },
  {
    path: "/admin",
    routes: adminRoutes,
  },
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
