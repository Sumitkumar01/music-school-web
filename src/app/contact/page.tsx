import ContactUsComponent from "./ContactUsComponent";




function MusicSchoolContactUs() {

  return (
    <>
      <ContactUsComponent />
    </>
  );
}

export default MusicSchoolContactUs;

export function generateMetadata() {
  return {
    title: 'Contact Us',
    description: 'Contact us for any questions or inquiries.',
  };
}