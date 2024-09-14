import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { name, company, designation, email, phone, message } = req.body;

        const webhookUrl = 'https://discord.com/api/webhooks/1284516525973176391/j_g9VOe10PizxhKn_KV9dswkIW9mk1MPSfAl53ltt3kCuF27P5m_qBcAXkmWnNDS_B6l';

        const discordMessage = {
            content: `New message from **${name}** at **${company}**`,
            embeds: [
                {
                    title: 'Contact Form Submission',
                    fields: [
                        { name: 'Name', value: name },
                        { name: 'Company Name', value: company },
                        { name: 'Designation', value: designation },
                        { name: 'Email', value: email },
                        { name: 'Phone Number', value: phone },
                        { name: 'Message', value: message },
                    ],
                    color: 5814783,
                },
            ],
        };

        try {
            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(discordMessage),
            });

            if (response.ok) {
                res.status(200).json({ message: 'Message sent successfully' });
            } else {
                res.status(response.status).json({ error: 'Failed to send message' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Internal server error' });
        }
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
