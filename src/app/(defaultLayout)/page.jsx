'use client';
import React from 'react';
import Hero from '../ui/Hero';
import Section from '../ui/Section';
import FeaturesSection from '../ui/Section/FeaturesSection';
import AboutSection from '../ui/Section/AboutSection';
import GallerySection from "@/app/ui/Section/GallerySection";
// Large Images for blur placeholder
import heroImage from '../../../public/images/home_1/hero_img.png';
import aboutImage from '../../../public/images/service/4.jpg';

const galleryData = [
  { imgUrl: '/images/service/case_01.jpg' },
  { imgUrl: '/images/service/case_02.jpg' },
  { imgUrl: '/images/service/case_03.jpg' },
  { imgUrl: '/images/service/Review_01.jpg' },
  { imgUrl: '/images/service/Review_02.jpg' },
  { imgUrl: '/images/service/Review_03.jpg' },
  { imgUrl: '/images/service/Review_04.jpg' },
  { imgUrl: '/images/service/Review_05.jpg' },
];

const featureListData = [
  {
    iconSrc: '/images/home_1/double-eyelid.svg',
    title: 'ทำตาสองชั้น ปรับกล้ามเนื้อตา',
    subTitle: 'บริการทำตาสองชั้นและปรับกล้ามเนื้อตา ให้ดวงตาสวย คมชัด ดูธรรมชาติ เหมาะกับใบหน้า.',
  },
  {
    iconSrc: '/images/home_1/oligio-laser.svg',
    title: 'Laser Oligio',
    subTitle: 'นวัตกรรมการยกกระชับผิวด้วยเลเซอร์ Oligio ช่วยให้ผิวหน้าเต่งตึง ดูอ่อนเยาว์.',
  },
  {
    iconSrc: '/images/home_1/filler.svg',
    title: 'Filler',
    subTitle: 'ฟิลเลอร์ช่วยเติมเต็มผิว ลดริ้วรอย เพิ่มความอิ่มเอิบให้ใบหน้า ดูเป็นธรรมชาติ.',
  },
  {
    iconSrc: '/images/home_1/botox.svg',
    title: 'Botox',
    subTitle: 'การฉีดโบท็อกซ์ช่วยลดริ้วรอยและปรับรูปหน้าให้ดูเรียว กระชับและอ่อนวัย.',
  },
  {
    iconSrc: '/images/home_1/fat-injection.svg',
    title: 'ฉีดไขมัน ลดเหนียง',
    subTitle: 'ฉีดไขมันเพื่อปรับรูปหน้าและลดเหนียง ช่วยให้ใบหน้าดูชัดและกระชับขึ้น.',
  },
  {
    iconSrc: '/images/home_1/facial-massage.svg',
    title: 'นวดหน้า',
    subTitle: 'บริการนวดหน้าช่วยผ่อนคลายกล้ามเนื้อและกระตุ้นการไหลเวียนโลหิต ให้ผิวหน้าสดใส.',
  },
];

const brandData = [
  { imgUrl: '/images/brand_1.png', imgAlt: 'Brand' },
  { imgUrl: '/images/brand_2.png', imgAlt: 'Brand' },
  { imgUrl: '/images/brand_3.png', imgAlt: 'Brand' },
  { imgUrl: '/images/brand_4.png', imgAlt: 'Brand' },
  { imgUrl: '/images/brand_5.png', imgAlt: 'Brand' },
  { imgUrl: '/images/brand_6.png', imgAlt: 'Brand' },
  { imgUrl: '/images/brand_7.png', imgAlt: 'Brand' },
  { imgUrl: '/images/brand_8.png', imgAlt: 'Brand' },
];
const faqData = [
  {
    title: 'D Bangkok Clinic มีบริการอะไรบ้าง?',
    content:
      'ที่ D Bangkok Clinic เราเชี่ยวชาญการดูแลดวงตาครบวงจร ทั้งทำตาสองชั้น ปรับกล้ามเนื้อตา และแก้ปัญหาผิวรอบดวงตา โดยทีมแพทย์เฉพาะทาง พร้อมดูแลคุณด้วยความใส่ใจในทุกรายละเอียด เพื่อให้คุณมั่นใจในความงามทุกมุมมอง',
  },
  {
    title: 'ฉันจะทำการนัดหมายได้อย่างไร?',
    content:
      'คุณสามารถทำการนัดหมายผ่านทางเว็บไซต์ หรือโทรติดต่อที่เบอร์โทรของ D Bangkok Clinic เรามีทีมงานพร้อมให้บริการและแนะนำตารางเวลาที่เหมาะสมกับคุณ.',
  },
  {
    title: 'D Bangkok Clinic รับประกันสุขภาพหรือไม่?',
    content:
      'D Bangkok Clinic ยอมรับการชำระเงินด้วยเงินสดและบัตรเครดิต สำหรับข้อมูลเกี่ยวกับการประกันสุขภาพ กรุณาติดต่อคลินิกเพื่อสอบถามเพิ่มเติม.',
  },
  {
    title: 'ควรเตรียมตัวอย่างไรก่อนเข้ารับบริการ?',
    content:
      'กรุณานำบัตรประชาชนและข้อมูลทางการแพทย์ที่เกี่ยวข้องมาด้วย หากคุณมีอาการแพ้หรือกำลังใช้ยารักษา กรุณาแจ้งทีมแพทย์ก่อนรับบริการ.',
  },
  {
    title: 'ฉันจะขอรับยาหรือเวชภัณฑ์เพิ่มเติมได้อย่างไร?',
    content:
      'หากคุณต้องการยาหรือเวชภัณฑ์เพิ่มเติม กรุณาติดต่อคลินิกเพื่อทำการนัดหมายหรือปรึกษาแพทย์เกี่ยวกับการต่ออายุยาหรือรับคำแนะนำเพิ่มเติม.',
  },
];

const blogData = [
  {
    title:
      'ทำศัลยกรรม อายุเท่าไหร่ ? ตอบข้อสงสัยของวัยรุ่นที่อยากทำศัลยกรรม พร้อมข้อควรรู้ก่อนตัดสินใจ',
    thumbUrl: '/images/blog/post_1.jpeg',
    date: 'March 12',
    btnText: 'รายละเอียดเพิ่มเติม',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: `การทำตาสองชั้นนอกจากจะช่วยเรื่องความสวยงามแล้ว ยังสามารถแก้ปัญหาดวงตาได้อีกด้วย ทำตาสองชั้นปัจจุบันมีข้อดี ข้อเสียยังไง มาดูกันเลย`,
    thumbUrl: '/images/blog/post_2.jpeg',
    date: 'March 11',
    btnText: 'รายละเอียดเพิ่มเติม',
    href: '/blog/blog-details',
    socialShare: true,
  },
  {
    title: 'ยกคิ้วแบบไม่ต้องพักฟื้น ด้วยเทคนิค ‘Direct Brow lifting’',
    thumbUrl: '/images/blog/post_3.jpeg',
    date: 'March 9',
    btnText: 'รายละเอียดเพิ่มเติม',
    href: '/blog/blog-details',
    socialShare: true,
  },
];
const awardData = [
  {
    title: 'คลินิกที่ได้รับมาตรฐานระดับสากล',
    subTitle:
      'D Bangkok Clinic ได้รับการรับรองมาตรฐานระดับสากลในด้านความปลอดภัยและคุณภาพของการให้บริการเสริมความงาม.',
    iconUrl: '/images/icons/award.svg',
  },
  {
    title: 'รางวัลคลินิกเสริมความงามยอดเยี่ยมแห่งปี',
    subTitle:
      'เราภูมิใจที่ได้รับรางวัลคลินิกเสริมความงามยอดเยี่ยมแห่งปีจากสมาคมความงามประเทศไทย.',
    iconUrl: '/images/icons/award.svg',
  },
  {
    title: 'การรับรองจากแพทยสภา',
    subTitle:
      'ทีมแพทย์ของเราผ่านการรับรองจากแพทยสภา และมีประสบการณ์ในด้านการดูแลผิวพรรณและความงามอย่างมืออาชีพ.',
    iconUrl: '/images/icons/award.svg',
  },
  {
    title: 'มาตรฐานการบริการยอดเยี่ยม',
    subTitle:
      'D Bangkok Clinic ได้รับการยอมรับในด้านมาตรฐานการบริการและความพึงพอใจของลูกค้า ด้วยการดูแลที่เป็นมิตรและใส่ใจในทุกรายละเอียด.',
    iconUrl: '/images/icons/award.svg',
  },
];

const departmentData = [
  {
    title: 'โปรทำตาสองชั้น ลด 20%',
    iconUrl: '/images/home_1/double_eyelid.svg',
    href: '/promotions/double-eyelid',
  },
  {
    title: 'เลเซอร์ Oligio ยกกระชับ ลด 15%',
    iconUrl: '/images/home_1/oligio_laser.svg',
    href: '/promotions/oligio-laser',
  },
  {
    title: 'ฟิลเลอร์ แก้ม/ปาก เริ่มต้นเพียง 9,999 บาท',
    iconUrl: '/images/home_1/filler.svg',
    href: '/promotions/filler',
  },
  {
    title: 'โบท็อกซ์ ลดริ้วรอย 10 จุด เริ่มต้นที่ 12,000 บาท',
    iconUrl: '/images/home_1/botox.svg',
    href: '/promotions/botox',
  },
  {
    title: 'ฉีดไขมัน ลดเหนียง พิเศษ 25,000 บาท',
    iconUrl: '/images/home_1/fat_injection.svg',
    href: '/promotions/fat-injection',
  },
  {
    title: 'ทรีทเม้นต์บำรุงผิวหน้า ซื้อ 1 แถม 1',
    iconUrl: '/images/home_1/facial_treatment.svg',
    href: '/promotions/facial-treatment',
  },
];



export default function Home() {
  return (
    <>

      <Hero
        title="'ดวงตาคือจุดเริ่มต้นของความงามที่แท้จริง'"
        subTitle="ที่ D Bangkok Clinic เราเชี่ยวชาญในการดูแลและแก้ไขปัญหาดวงตาทุกประเภท ทีมแพทย์เฉพาะทางของเราพร้อมให้บริการด้วยความเชี่ยวชาญและความใส่ใจทุกรายละเอียด ตั้งแต่การทำตาสองชั้น การปรับกล้ามเนื้อตา ไปจนถึงการแก้ไขปัญหาผิวรอบดวงตา เพื่อให้คุณมั่นใจและพร้อมเผยความงามในทุกมุมมอง"
        bgUrl="/images/departments/banner_bg.svg"
        imgUrl={heroImage}
        infoList={[
          {
            title: 'โทร',
            subTitle: '0616479191',
            iconUrl: '/images/contact/icon_1.svg',
          },
          {
            title: 'Line',
            subTitle: '@dbankgogclinic',
            iconUrl: '/images/icons/ambulance.svg',
          },
          {
            title: 'Location',
            subTitle: ' BTS ทองหล่อ ทางออก 3',
            iconUrl: '/images/icons/pin.svg',
          },
        ]}
        btnText="จองเลย"
        btnUrl="https://line.me/R/ti/p/@555haawr?ts=06030418&oat_content=url"
      />

      {/* Start Feature Section */}
      <Section
        topMd={20}
        topLg={140}
        topXl={100}
        bottomMd={185}
        bottomLg={140}
        bottomXl={100}
      >
        <FeaturesSection sectionTitle="บริการของเรา" data={featureListData} />
      </Section>
      {/* End Feature Section */}

      {/* Start About Section */}
      <Section>
        <AboutSection
          imgUrl={aboutImage}
          spiningImgUrl="/images/home_1/about_mini.svg"
          title="เกี่ยวกับเรา"
          subTitle="D Bangkok Clinic"
          featureList={[
            {
              featureListTitle:
                'D Bangkok Clinic - คลินิกความงามที่คุณวางใจ',
              featureListSubTitle:
                'เราเป็นคลินิกความงามที่ตั้งอยู่ในย่านทองหล่อ พร้อมทีมแพทย์ผู้เชี่ยวชาญที่มีประสบการณ์สูง เรามุ่งมั่นที่จะให้บริการด้วยความเอาใจใส่ และใช้เทคโนโลยีที่ทันสมัยที่สุดเพื่อตอบสนองความต้องการของลูกค้าทุกท่าน.',
            },
            {
              featureListTitle:
                'บริการที่หลากหลายและครอบคลุมทุกความต้องการ',
              featureListSubTitle:
                'เรามีบริการเสริมความงามที่ครอบคลุม ไม่ว่าจะเป็นการทำตาสองชั้น การใช้เลเซอร์ในการยกกระชับผิว ฟิลเลอร์ โบท็อกซ์ และการฉีดไขมันเพื่อลดเหนียง เรามั่นใจว่าทุกบริการของเราจะช่วยเสริมความงามและเพิ่มความมั่นใจให้กับคุณ.',
            },
          ]}
        />
      </Section>

      {/* End About Section */}

      <Section topMd={170} topLg={120} topXl={80}>
        <GallerySection
          sectionTitle="ผลงานของเรา"
          sectionTitleUp=""
          data={galleryData}
        />
      </Section>
    </>
  );
}
