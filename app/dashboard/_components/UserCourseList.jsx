'use client'
import { CourseList } from '@/configs/schema'
import { eq } from 'drizzle-orm'
import React, { useEffect, useState } from 'react'
import { useUser } from '@clerk/nextjs'
import { db } from '@/configs/db'
import CourseCard from './CourseCard'

const UserCourseList = () => {
  const [courseList, setCourseList] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { user, isLoaded } = useUser()

  const getUserCourses = async () => {
    try {
      const result = await db
        .select()
        .from(CourseList)
        .where(eq(CourseList.createdBy, user?.primaryEmailAddress?.emailAddress))
      setCourseList(result)
    } catch (err) {
      console.error('Error fetching courses:', err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    // Only fetch courses when user data is loaded
    if (isLoaded && user) {
      getUserCourses()
    }
  }, [isLoaded, user])

  // Show loading skeleton while user data is loading
  if (!isLoaded || isLoading) {
    return (
      <div className="mt-10">
        <h2 className="font-medium text-xl mb-3">My Courses</h2>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div
              key={index}
              className="w-full mt-5 bg-slate-200 animate-pulse rounded-lg h-[270px]"
            />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="mt-10">
      <h2 className="font-medium text-xl mb-3">My Courses</h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {courseList.length > 0 ? (
          courseList.map((course, index) => (
            <CourseCard course={course} key={course.id} refreshData={getUserCourses} />
          ))
        ) : (
          <div className="col-span-full text-center text-gray-500">No courses found</div>
        )}
      </div>
    </div>
  )
}

export default UserCourseList
