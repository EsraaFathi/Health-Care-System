import * as sdk from 'node-appwrite'

export const { PROJECT_ID, API_KEY, DATABASE_ID, PATIENT_COLLECTION_ID, DOCTOR_COLLECTION_ID, APPOINTMENT_COLLECTION_ID,
    NEXT_PUBLIC_BUCKET_ID: BUCKEY_ID,
    NEXT_PUBLIC_ENDPOINT : ENDPOINT
} = process.env;


const client = new sdk.Client()
client.setEndpoint(ENDPOINT!)
    .setProject('6777af69000ba22e7d82')
    .setKey('standard_5c980d82f0496c641c2b4dbfb088611a2f9a22e70c76f57c1b701fa41bec435e32f6c3b0dd103eac7fc9484fb35f367643672910138e1b4261efdb1e2cbfb0c4879ba33303f9f727d5de3af8178a7578d35e22ec8290b719ecb2a1e7a8cf0388863e8dceffd38b713da483812f632362adab29907e3a68c9c3684e3032a9550c');
    

export const databases = new sdk.Databases(client);
export const storage = new sdk.Storage(client);
export const messaging = new sdk.Messaging(client);
export const users = new sdk.Users(client);

