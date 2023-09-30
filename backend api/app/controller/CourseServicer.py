from fastapi import HTTPException

class CourseServicer:
    def __init__(self,mydb):
        self.course_col = mydb.get_collection('Courses')
        self.auth_col = mydb.get_collection('Authentication')

    def all_courses(self):
        courses = []
        cursor = self.course_col.find({},{'_id':0, 'Title':1})
        for course in cursor:
            courses.append(course['Title'])
        return courses

    def owned_courses(self, email):
        myquery = [{"$match": {"Email": email}},
                   {"$project": {
                       "_id": 0,
                       "Email":1,
                       "Courses": 1,
                   }}]
        mycursor = self.auth_col.aggregate(myquery)
        mylist = next(mycursor, None)
        if not mylist:
            raise HTTPException(status_code=403, detail="Unauthorized email or password, please try again")

        return mylist['Courses']

    def add_course(self, email, new_courses: []):
        myquery = [{"$match": {"Email": email}},
                   {"$project": {
                       "_id": 0,
                       "Email":1,
                       "Courses": 1,
                   }}]
        mycursor = self.auth_col.aggregate(myquery)
        mylist = next(mycursor, None)
        if not mylist:
            raise HTTPException(status_code=403, detail="Unauthorized email or password, please try again")

        cur_courses = mylist['Courses']
        courses = list(set(cur_courses + new_courses))

        update_query = {"Email": email}
        update = {'$set': {'Courses': courses}}
        self.auth_col.update_one(update_query, update, upsert=False)
        return courses

