import React from "react";
import Link from "next/link";

export default function HeroImage() {
  return (
    <section className="grow pt-4 w-full ">
      {" "}
      {/* Povećana visina na pt-24 */}
      <div className="mx-auto h-full max-w-9xl max-h-9xl flex items-center relative overflow-hidden">
        {/* max-w-[1026px]  */}
        <div className="w-fit m-8 xl:m-28 md:m-24 sm:m-8 z-20">
          <h1 className="text-5xl max-w-[28ch] font-extrabold tracking-tight text-red-400">
            Sadoro
          </h1>
          <h1 className="text-5xl max-w-[28ch] font-extrabold tracking-tight">
            Vaša mašta je naš proizvod
          </h1>
          <p className="max-w-xl mt-4 text-gray-600">
            U današnjem svetu brze mode, ponosimo se pružanjem nečega posebnog -
            svaki komad je pažljivo osmišljen i ručno izrađen s ljubavlju prema
            detaljima. Naša kolekcija ne samo da odražava autentičnost i
            originalnost, već vam pruža priliku da nosite jedinstvene kreacije
            koje su daleko iznad standardnih modnih trendova.{" "}
          </p>
          <p className="max-w-xl mt-4 text-gray-600">
            Osim što isticemo postojeće kreacije, želimo vam pružiti mogućnost
            da personalizujete svoje torbe, kape i saleve prema vašim željama.
            Vaša kreativna vizija postaje naš izazov, rezultirajući unikatnim
            komadom koji savršeno odražava vaš stil i jedinstvenost.
          </p>
          <p className="max-w-xl mt-4 text-gray-600">
            Sadoro nije samo brend, već zajednica gde se ljubitelji rukotvorina
            okupljaju. Istražite našu raznovrsnu kolekciju, pronađite savršen
            komad za sebe ili dragu osobu, i doživite lepotu ručno rađenih
            umetničkih dela svaki put kad nosite nešto iz naše radionice. Hvala
            vam što ste deo naše priče!
                  </p>
                  
          <Link
            href="/products"
            className="bg-red-400 rounded px-6 py-3 hover:bg-red-500 transition-all text-white text-sm mt-6 block w-fit "
          >
            Otkrijte čaroliju
          </Link>
        </div>
        <div className="grid-cols-3 absolute md:grid -right-24 md:right-0 gap-4 -z-20 w-[70vw]">
          <div className="absolute w-full h-full bg-gradient-to-r from-white to-black/[.0] "></div>
          {/* lg:bg-none */}
          <div className="row-start-2 row-end-4 rounded-xl overflow-hidden">
            <img
              src="https://scontent.fbeg2-1.fna.fbcdn.net/v/t39.30808-6/395425092_203598042763796_7947771434750399452_n.jpg?stp=cp6_dst-jpg_p960x960&_nc_cat=100&ccb=1-7&_nc_sid=783fdb&_nc_eui2=AeE4Q-mMmgYFhv25BTMyzmm2xQsq89_PlknFCyrz38-WSQ9wE8IlyjStkmNXY-Je7Ss&_nc_ohc=Sz5elpqmr6kAX-RBBm0&_nc_ht=scontent.fbeg2-1.fna&oh=00_AfAbXMR04z3FtoWQETi_ajBPr7-6ahWeAYQ0FN93XJ7oKA&oe=65D25788"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-start-2 col-end-3 row-start-1 row-end-3 rounded-xl overflow-hidden">
            <img
              src="https://scontent.fbeg2-1.fna.fbcdn.net/v/t39.30808-6/392885027_17869451925003249_6420956342549379858_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeExVyiOx21bI-TPf7b0ittMZJZ9XWf9CUdkln1dZ_0JR0suC-49_Xd_VGH5ZW4xmkQ&_nc_ohc=d4AXpznQhZoAX-_8aaF&_nc_ht=scontent.fbeg2-1.fna&oh=00_AfDcmNq37Ymazy78pCuUoLxUUejxxe8idvtYSb9IQrFd5g&oe=65D4111C"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-start-3 col-end-4 row-start-2 row-end-4 rounded-xl overflow-hidden">
            <img
              src="https://scontent.fbeg2-1.fna.fbcdn.net/v/t39.30808-6/395420122_17870669037003249_7987798899882415181_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHiEQU-smqOJ4R2xebFA-qkPjs35oimoxo-OzfmiKajGhvqxbOJd3xGdRJWueUJMIw&_nc_ohc=FZyBsBWgt68AX8FMTBi&_nc_ht=scontent.fbeg2-1.fna&oh=00_AfDKXdIeMINjEQOU7mWkRwdao2luN-pG1wDFdd-ppZeRcQ&oe=65D35FC7"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-start-1 col-end-2 row-start-4 row-end-6 rounded-xl overflow-hidden">
            <img
              src="https://scontent.fbeg2-1.fna.fbcdn.net/v/t39.30808-6/347254563_117565228033745_4735055668289575786_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHUYVgJgHUZzrZL4_s2AJsTpKOFOpzibzyko4U6nOJvPHYbt2nad8qaYEzmSqKrUWk&_nc_ohc=oQHiMNj8auEAX9mazoa&_nc_ht=scontent.fbeg2-1.fna&oh=00_AfAcodzgzxVsbmBYNXZOra54pPVjBudU3c-c0j_LaUhg8w&oe=65D29623"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-start-2 col-end-3 row-start-3 row-end-5 rounded-xl overflow-hidden">
            <img
              src="https://scontent.fbeg2-1.fna.fbcdn.net/v/t39.30808-6/347409685_129446966845571_2241705704115875767_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeHcfHOslKq5v3YQ13-Da99D3rG07qJgIejesbTuomAh6Br0qedkMKNT4aFvAv9mq3U&_nc_ohc=HdpA5FGcQfYAX_5SgA6&_nc_ht=scontent.fbeg2-1.fna&oh=00_AfAJRXtC0XsUX1BQSWQz0Y5q4pCAlNCKHdeuHu8uC2WPUQ&oe=65D33B69"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-start-3 col-end-4 row-start-4 row-end-6 rounded-xl overflow-hidden">
            <img
              src="https://scontent.fbeg2-1.fna.fbcdn.net/v/t39.30808-6/354050533_112842018506066_5246553867407160219_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=3635dc&_nc_eui2=AeE1SBN961CP1Gt4gea3og5Gz1gC7Fp-LCjPWALsWn4sKNHWPPTJyZxOpO7oSMVsQvg&_nc_ohc=4JJBREf51EIAX9pq3lo&_nc_ht=scontent.fbeg2-1.fna&oh=00_AfBjfmktiq5EiAos_SpCpKSAn8Yhi1cQKn03I4kct3q8yA&oe=65D2E8D7"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="col-start-2 col-end-3 row-start-5 row-end-7 rounded-xl overflow-hidden">
            <img
              src="https://scontent.fbeg2-1.fna.fbcdn.net/v/t39.30808-6/406820490_2454612728041805_3371140306700201185_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=dd5e9f&_nc_eui2=AeG8sglrI2BmSPPL3tD0xPp-HItxjB0oGwkci3GMHSgbCfV4m-7A0kjkmsTzj-SK2rY&_nc_ohc=rSoU2frPZsoAX804Vc-&_nc_ht=scontent.fbeg2-1.fna&oh=00_AfDst4KJMDsIeYAzVA8357Ue_gV0B_HkM-imv8BFws2XLg&oe=65D2E676"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
