import Heading from "components/experience/Heading";
import More from "components/experience/More";
import Page from "components/utility/Page";

function designs() {
  return (
    <Page
      currentPage="Experience"
      meta={{ desc: "I'm an avid self-taught designer too! I publish all my web and creative designs on Dribbble also." }}
    >
      <Heading />
      <More />
    </Page>
  );
}

export default designs;