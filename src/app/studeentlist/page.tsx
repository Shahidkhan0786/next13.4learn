
import Link from "next/link"

const Student = () => {
    const arr  = ["Shahid","ali","Usman"]
  return (
    <>
        Students
        {arr.map((stu,i)=>{
            return <div>
                {/* <Link href=`${i}`>{stu}</Link> */}
                <Link href={`/studeentlist/${stu}/${i+1}`}>{stu}</Link>
            </div>          
            })}
    </>
  )
}

export default Student