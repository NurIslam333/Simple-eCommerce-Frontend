import { CustomContainer, CustomHeader, CustomImage } from "@/components/ui";

export default function BestDeals() {
  return (
    <section className="my-10">
      <CustomContainer>
        <CustomHeader title1="Best" title2="Deals" />

        <div className="grid tab:grid-cols-3 gap-5">
          <div className="flex flex-col gap-4">
            <div className="bg-white shadow-lg p-1 rounded-lg">
              <CustomImage
                src="/images/best-deals/1.png"
                alt="best-deals"
                width="450"
                height="450"
                className="w-full rounded-lg"
              />
            </div>

            <div className="bg-white shadow-lg p-1 rounded-lg">
              <CustomImage
                src="/images/best-deals/2.png"
                alt="best-deals"
                width="450"
                height="450"
                className="w-full rounded-lg"
              />
            </div>
          </div>

          <div className="bg-white shadow-lg p-1 rounded-lg h-full">
            <CustomImage
              src="/images/best-deals/3.png"
              alt="best-deals"
              width="450"
              height="450"
              className="w-full rounded-lg h-full"
              mainCSS="h-full"
            />
          </div>

          <div className="flex flex-col gap-4">
            <div className="bg-white shadow-lg p-1 rounded-lg">
              <CustomImage
                src="/images/best-deals/4.png"
                alt="best-deals"
                width="450"
                height="450"
                className="w-full rounded-lg"
              />
            </div>

            <div className="bg-white shadow-lg p-1 rounded-lg">
              <CustomImage
                src="/images/best-deals/5.png"
                alt="best-deals"
                width="450"
                height="450"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
}
