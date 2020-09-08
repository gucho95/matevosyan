import { withTranslation } from "../i18n";

function Error({ statusCode }) {
  console.log("statusCode", statusCode);
  return <p>{statusCode ? `An error ${statusCode} occurred on server` : "An error occurred on client"}</p>;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode, namespacesRequired: ["common"] };
};

export default withTranslation("common")(Error);
