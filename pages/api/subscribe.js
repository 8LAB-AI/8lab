import Airtable from 'airtable';

export default async function handler(req, res) {
    const email = req.body.email;
    if (!email) {
        return res.status(400).json({ error: 'Email is required' });
    }

    const base = new Airtable({apiKey: process.env.AIRTABLE_PERSONAL_ACCESS_TOKEN}).base('appnLVcu2eBpngNjX');

    try {
        console.log(base.table("Emails"));
        await base("Emails").create([
            {
                "fields": {
                    "Email": email
                }
            }
        ]);
        console.log('Email submitted to Airtable successfully');
    } catch (error) {
        console.error('Error submitting email to Airtable:', error);
        return res.status(500).json({ error: 'Failed to submit email' });
    }
    res.status(200).json({ text: 'success' });
}