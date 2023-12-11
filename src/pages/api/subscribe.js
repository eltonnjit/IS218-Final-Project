const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: 'YOUR_API_KEY',
  server: 'YOUR_SERVER_PREFIX',
});

export default async (req, res) => {
  const { email } = req.body;
  try {
    await mailchimp.lists.addListMember('YOUR_AUDIENCE_ID', {
      email_address: email,
      status: 'subscribed',
    });
    res.status(200).json({ message: 'Success' });
  } catch (error) {
    res.status(500).json({ error: error.message || error.toString() });
  }
};
