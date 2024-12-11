import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const BACKEND_URL = process.env.BACKEND_URL;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get('http://localhost:3001/outlets');
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error fetching outlets:', error);
    res.status(500).json({ error: 'Failed to fetch outlets' });
  }
}
