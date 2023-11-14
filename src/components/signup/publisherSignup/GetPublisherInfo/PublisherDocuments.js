import CustomCardContainer from "@/components/ui/login-submit/CustomCard/CustomCardContainer";
import CustomCardHeader from "@/components/ui/login-submit/CustomCard/CustomCardHeader";
import CustomCardParagraph from "@/components/ui/login-submit/CustomCard/CustomCardParagraph";
import PublisherDocumentsForm from "./PublisherDocumentsForm";

function PublisherDocuments(props) {
  return (
    <CustomCardContainer roundedTop="20px">
      <CustomCardHeader>
        <p>مدارک</p>
      </CustomCardHeader>
      <CustomCardParagraph>
        اطمینان حاصل فرمایید که تصویر ارسالی{" "}
        <span className="font-bold">واضح و خوانا</span> باشد.
      </CustomCardParagraph>
      <PublisherDocumentsForm/>
    </CustomCardContainer>
  );
}

export default PublisherDocuments;
