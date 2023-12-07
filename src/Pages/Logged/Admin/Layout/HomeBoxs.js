import { AdminCour } from "../../../../Layout/Cours"
import Header from "../../Header"
import { CoursesSkeleton } from "./Skeletons"

export const CoursesBox = ({courses, lang, langSub}) => {
    return(
        <div className="">
            <Header langSub={langSub} title={lang?.cours} total={courses?.length || 0} />
            
            <div className="mt-4" >
                {courses
                    ?
                        courses.map((item,key)=>(
                            key < 3 && <AdminCour item={item} key={key} affect={2} />
                        ))
                    :
                        <CoursesSkeleton />
                }
            </div>
        </div>
    )
}

export const TeachersBox = ({teachers, lang, langSub}) => {
    return(
        <div className="">
            <Header langSub={langSub} title={lang?.profs} total={teachers?.length || 0} />
            
            <div className="mt-4" >
                {teachers
                    ?
                        teachers.map((item,key)=>(
                            key < 3 && <AdminCour item={item} key={key} affect={2} />
                        ))
                    :
                        <CoursesSkeleton />
                }
            </div>
        </div>
    )
}