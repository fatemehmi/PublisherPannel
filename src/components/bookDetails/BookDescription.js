import React from "react";
import CustomCardContainer from "../ui/bookDetail/CustomCardContainer";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useState } from "react";
function BookDescription() {
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
    };
  return (
    <CustomCardContainer pt="30px">
      <div>
        <Tabs>
          <TabList>
            <Tab>درباره دایی جان ناپلئون</Tab>
            <Tab>مشخصات</Tab>
            <Tab>فهرست</Tab>
          </TabList>

          <TabPanels>
            <TabPanel dir="rtl">
              <p className="leading-10">
                طنزنویسی در ادبیات ایران سابقه‌ای دیرینه‌ دارد. از زمانی که
                «عبید زاکانی» منظومه «موش و گربه» را سرود تا امروز، آثار طنز
                ماندگاری در ادبیات فارسی نوشته شده است. تعداد زیادی از این آثار
                طنز از سلاح قلم برای بیان ضعف‌های جامعه استفاده کرده‌اند و این
                شیوه‌ی نقد اجتماعی از ادبیات کلاسیک به ادبیات معاصر هم رسیده
                است. دایی جان ناپلئون به قلم ایرج پزشکزاد منحصربه‌فردترین داستان
                معاصر فارسی است که با زبانی طنز مردم و آداب و رسوم عامیانه‌ی
                جامعه‌ی دهه‌ی چهل ایران را نقد کرده است. دایی جان ناپلئون؛کتابی
                برای همه نسل‌ها کتاب دایی جان ناپلون My Uncle Napoleon رمانی در
                قالب طنز است که در سال 1349 چاپ شده است. این کتاب به هشت زبان
                دنیا ترجمه شده است و ژانر کتاب تلفیقی از ژانر اجتماعی، بلوغ و
                طنز است. رمان دایی‌ جان ناپلئون نتیجه‌ی تلفیق داستان عشق ...
                <span onClick={toggleReadMore}>{isReadMore ? "...read more" : " show less"}</span>
              </p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </div>
    </CustomCardContainer>
  );
}

export default BookDescription;
