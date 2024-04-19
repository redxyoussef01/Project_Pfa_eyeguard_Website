import pyrebase

firebaseConfig = {
  'apiKey': "AIzaSyCfOvU3zqCtuU88um-1Z1NULWWoBD4vUk8",
  'authDomain': "eyeguard-47239.firebaseapp.com",
  'databaseURL': "https://eyeguard-47239-default-rtdb.firebaseio.com",
  'projectId': "eyeguard-47239",
  'storageBucket': "eyeguard-47239.appspot.com",
  'messagingSenderId': "975062102375",
  'appId': "1:975062102375:web:fc6ebca2cb91aed258ffc2",
  'measurementId': "G-ZLWEXMVWFZ"
}

firebase=pyrebase.initialize_app(firebaseConfig)

#auth=firebase.auth()

#----------Auth
#LOGIN
#def Login():
  #email=input("Enter your email : ")
  #password=input("Enter your password : ")
  #try:
    #auth.sign_in_with_email_and_password(email,password)
    #print("successfully signed in !")
  #except:
    #print("Invalid user or password, Try again !")

#Login()


#----------Storage
#storage=firebase.storage()
#filename=input("enter the name of the file you want to upload : ")
#cloudfilename=input("enter the name of the file on the cloud : ")
#storage.child(cloudfilename).put(filename)

#to get the file
#print(storage.child(cloudfilename).get_url(None))

#to download the file
#storage.child(cloudfilename).download("","downloaded.txt")


#----------database
db=firebase.database()

#-------CREATE
#data={'age':40,'address':"New York", 'employed':True, 'name':"john smith"}
#db.child("people").child("zazazazaza").set(data)

#-------UPDATE if you know the id
#db.child("people").child("zazazazaza").update({'name':"Ziad"})

#-------UPDATE if you dont know the id
#people = db.child("people").get()

#for person in people.each():
    #person_data = person.val()  # Get the data for the person
    #if isinstance(person_data, dict) and 'name' in person_data and #person_data['name'] == 'Ziad':
        #db.child("people").child(person.key()).update({'name': "Ayoub"})

#-------DELETE
#db.child("people").child("PERSON").child("age").remove()

#-------DELETE if you dont know the id
#people = db.child("people").get()

#for person in people.each():
    #person_data = person.val()  # Get the data for the person
    #if isinstance(person_data, dict) and 'name' in person_data and #person_data['name'] == 'Ziad':
        #db.child("people").child(person.key()).child("age").remove()


#-------READ
people = db.child("people").order_by_child("name").equal_to("Ayoub").get()
print(people.val())

