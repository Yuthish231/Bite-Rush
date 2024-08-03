import { connect, set } from 'mongoose';
import { UserModel } from '../Models/user.model.js';
import { sample_users } from '../data.js';
import bcrypt from 'bcryptjs';

const PASSWORD_HASH_SALT_ROUNDS = 10;

set('strictQuery', true);

export const dbconnect = async () => {
    try {
        const mongoUri = process.env.MONGO_URI;
        if (!mongoUri) {
            throw new Error('MONGO_URI is not defined in the environment variables');
        }

        await connect(mongoUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        await seedUser();
        console.log('Connected to database');
    } catch (error) {
        console.error('Database connection error:', error);
    }
};

async function seedUser() {
    const userCount = await UserModel.countDocuments();
    if (userCount > 0) {
        console.log('Users seed is already done!');
        return;
    }
    for (let user of sample_users) {
        user.password = await bcrypt.hash(user.password, PASSWORD_HASH_SALT_ROUNDS);
        await UserModel.create(user);
    }
    console.log('User seed is done');
}
