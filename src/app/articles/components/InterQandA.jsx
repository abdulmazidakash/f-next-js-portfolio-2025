
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function InterQandA() {
  return (
      <div className='w-10/12 mx-auto'>
      <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl w-full text-center my-6 sm:my-8 md:my-10 lg:my-16 flex items-center justify-center'> Interpersonal Question & Answer</h2>

    <Accordion
      type="single"
      collapsible
      className="rounded-lg border border-dark p-2 border-b-4 border-r-4 rounded-lg"
      defaultValue="item-1"
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>1. Tell me about yourself.</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance border-b-2 border-r-2 rounded-lg border-dark text-justify">
          <p>
           আসসালামু আলাইকুম, আমি আবদুল মাজিদ আকাশ। আমি একজন স্টুডেন্ট। বর্তমানে আমি বি.এসসি ইন টেক্সটাইল ইঞ্জিনিয়ারিং পডতেছি নরসিংদী টেক্সটাইল ইঞ্জিনিয়ারিং কলেজে। আমার হোম টাউন ফেনী। কিন্তু আমি পড়ালেখা করার কারণে নরসিংদীতে থাকি।
           </p>
           <p className='my-2'>
          রিসেন্টলি আমি প্রোগ্রামিং হিরোর কমপ্লিট ওয়েব ডেভেলপমেন্ট কোর্সটি সম্পন্ন করেছি। বর্তমানে আমি জাভাস্ক্রিপ্ট, রিয়্যাক্ট.জেএস, নোড.জেএস, এবং মঙ্গোডিবি ইউজ করে ওয়েব অ্যাপ্লিকেশন ক্রিয়েট করছি। এগুলো ইউজার ফ্রেন্ডলি এবং অল ডিভাইস রেসপন্সিভ।
            </p>
            <p className='my-2'>
          আমি বেশ কয়েকটি প্রজেক্টে কাজ করেছি। তার মধ্যে একটি হলো স্কলারশিপহাব। এটি একটি স্কলারশিপ ম্যানেজমেন্ট সিস্টেম। আমার অন্যতম একটি টিম প্রজেক্ট হলো টিক্টো, যা একটি বাস টিকেট বুকিং প্ল্যাটফর্ম। এই প্রজেক্টে আমি পেমেন্ট সিস্টেম এবং টিকেট পিডিএফ নিয়ে কাজ করেছি।
          </p>
          <h3>English:</h3>
          <p>
          Assalamu Alaikum, I am Abdul Mazid Akash. I am a student. Currently I am studying B.Sc in Textile Engineering at Narsingdi Textile Engineering College. My home town is Feni. But I live in Narsingdi due to my studies.
           </p>
           <p className='my-2'>
          Recently I have completed the Complete Web Development course of Programming Hero. Currently I am creating web applications using JavaScript, React.JS, Node.JS, and MongoDB. These are user friendly and all device responsive.
            </p>
            <p className='my-2'>
          I have worked on several projects. One of them is ScholarshipHub. It is a scholarship management system. One of my team projects is Tiktoo, which is a bus ticket booking platform. In this project I worked on payment system and ticket PDF.
          </p>
   
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>2. What are your greatest strengths?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance border-b-2 border-r-2 rounded-lg border-dark text-justify">
          <p>
           আমার সবচেয়ে বড় স্ট্রেংথ হলো, টিম হিসেবে কাজ করার মানসিকতা এবং নতুন টেকনোলজি দ্রুত শেখার ক্ষমতা।
           </p>
           <p className='my-2'>
          Tickto প্রজেক্টে আমি রেসপন্সিভ সিট বুকিং ইউআই তৈরি করেছি এবং পেমেন্টের জন্য স্ট্রাইপ ইন্টিগ্রেশন করেছি। এর ফলে আমি ফ্রন্টএন্ড এবং ব্যাকএন্ড দুই দিকেই বাস্তব অভিজ্ঞতা অর্জন করেছি।
            </p>
            <p className='my-2'>
          ইনশাআল্লাহ, আশা করি এই স্কিলগুলো আমাকে যেকোনো টিমে দ্রুত খাপ খাইয়ে নিতে এবং কার্যকরভাবে অবদান রাখতে সহায়তা করবে।
          </p>
          <h3>English:</h3>
          <p>
          My biggest strength is my team mentality and ability to learn new technologies quickly.
           </p>
           <p className='my-2'>
          In the Tickto project, I developed a responsive seat booking UI and integrated Stripe for payments. As a result, I gained practical experience in both frontend and backend.
            </p>
            <p className='my-2'>
          InshaAllah, I hope these skills will help me adapt quickly and contribute effectively to any team.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>3. What are your greatest weaknesses?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance border-b-2 border-r-2 rounded-lg border-dark text-justify">
          <p>
           আমি নিজেকে একজন learner হিসেবে দেখি এবং সব সময় চেষ্টা করি নিজেকে আরও কিভাবে improve করা যায়।
           </p>
           <p className='my-2'>
          এক সময় HTML, CSS তেমন একটা জানতাম না, কিন্তু বর্তমানে নিজেকে অনেক improve করে HTML, CSS, JavaScript, React প্রজেক্টে ব্যবহার করতে পারি।
            </p>
            <p className='my-2'>
         আমি বিশ্বাস করি feedback গ্রহণ, শেখার মানসিকতা এবং নিজেকে আপডেট রাখার প্রবণতাই আমাকে পেশাগতভাবে আরও শক্তিশালী করে তুলবে।
          </p>
          <h3>English:</h3>
          <p>
          I see myself as a learner and always try to improve myself further.
           </p>
           <p className='my-2'>
          At one time, I didn't know much about HTML, CSS, but now I can improve myself a lot and use it in HTML, CSS, JavaScript, React projects.
            </p>
            <p className='my-2'>
          I believe that accepting feedback, having a learning mindset, and keeping myself updated will make me stronger professionally.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4">
        <AccordionTrigger>4. Something you feel ashamed of? </AccordionTrigger>
       <AccordionContent className="flex flex-col gap-4 text-balance border-b-2 border-r-2 rounded-lg border-dark text-justify">
          <p>
           আমি এমন পরিস্থিতি এড়ানোর চেষ্টা করি যা ভবিষ্যতে অনুশোচনার কারণ হতে পারে। এজন্যই আমি যোগাযোগ ও দায়িত্ববোধকে গুরুত্ব দিই।
           </p>
           <p className='my-2'>
          TickTo প্রজেক্টে আমি সব সময় টিমের সাথে যুক্ত থেকেছি ও কাজ ঠিকমতো এগিয়ে নিয়েছি।
            </p>
            <p className='my-2'>
         আমি বিশ্বাস করি, আগে থেকেই সচেতন থাকাই ভবিষ্যতের অনুশোচনা কমায়।
          </p>
          <h3>English:</h3>
          <p>
          I try to avoid situations that may cause future regrets. That's why I value communication and responsibility.
           </p>
           <p className='my-2'>
          In the TickTo project, I have always been involved with the team and have taken the work forward properly.
            </p>
            <p className='my-2'>
          I believe that being aware in advance reduces future regrets.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5">
        <AccordionTrigger>5. Why are you leaving your last position?</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance border-b-2 border-r-2 rounded-lg border-dark text-justify">
          <p>
           আমি এখন পর্যন্ত কোথাও চাকরি করি নাই।
           </p>
           <p className='my-2'>
          এখন পর্যন্ত আমার মূল ফোকাস ছিল শেখা এবং বাস্তবধর্মী frontend and backend প্রজেক্ট তৈরি করা।
            </p>
            <p className='my-2'>
        এখন আমি মনে করি আমার স্কিলগুলো বাস্তব কাজের পরিবেশে প্রয়োগ করতে প্রস্তুত, টিমের সাথে মিলে কাজ করে নিজের দক্ষতা বাড়াতে চাই এবং কোম্পানির লক্ষ্যে অবদান রাখতে চাই।
          </p>
          <h3>English:</h3>
          <p>
         I have not worked anywhere yet.
           </p>
           <p className='my-2'>
          My main focus so far has been learning and creating realistic frontend and backend projects.
            </p>
            <p className='my-2'>
          Now I feel ready to apply my skills in a real work environment, work with a team to improve my skills and contribute to the company's goals.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-6">
        <AccordionTrigger>6. The “Silent Treatment”</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance border-b-2 border-r-2 rounded-lg border-dark text-justify">
          <p>
        আমি কি আপনার প্রশ্নের উত্তর স্পষ্টভাবে দিতে পেরেছি, না কি আপনি আরো বিস্তারিত শুনতে চান।
           </p>
          
          <h3>English:</h3>
          <p>
        Have I been able to answer your question clearly, or would you like to hear more details?
           </p>
           
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-7">
        <AccordionTrigger>7. Why should I hire you?</AccordionTrigger>
         <AccordionContent className="flex flex-col gap-4 text-balance border-b-2 border-r-2 rounded-lg border-dark text-justify">
          <p>
           আমার কাছে MERN stack স্কিল, বাস্তব প্রজেক্ট অভিজ্ঞতা এবং টিমের সাথে কাজ করার মানসিকতা আছে।
           </p>
           <p className='my-2'>
          TickTo ও ScholarshipHub এর মতো প্রজেক্টে আমি ফ্রন্টএন্ড এবং ব্যাকএন্ড মিলিয়ে বাস্তব সমস্যার সমাধান করেছি।
            </p>
            <p className='my-2'>
        আমি শিখতে আগ্রহী, দ্রুত মানিয়ে নিতে পারি এবং দীর্ঘ মেয়াদে টিমের সফলতায় অবদান রাখতে চাই।
          </p>
          <h3>English:</h3>
          <p>
        I have MERN stack skills, real project experience, and a team mindset.
           </p>
           <p className='my-2'>
          I have solved real problems by combining frontend and backend in projects like TickTo and ScholarshipHub.
            </p>
            <p className='my-2'>
          I am eager to learn, adapt quickly, and want to contribute to the team's long-term success.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-8">
        <AccordionTrigger>8. Why do you want to work here?</AccordionTrigger>
         <AccordionContent className="flex flex-col gap-4 text-balance border-b-2 border-r-2 rounded-lg border-dark text-justify">
          <p>
           এই রোলটি সেই ধরণের চ্যালেঞ্জ দেয় যা আমি খুঁজছি, যেখানে আমি শেখা স্কিল প্রয়োগ করতে পারি এবং পেশাগত ও ব্যক্তিগতভাবে বেড়ে উঠতে পারি।
আমি বিশ্বাস করি, আপনারা আমাকে সেই সুযোগটি দিতে পারেন।
           </p>
           <p className='my-2'>
          আমি বিশ্বাস করি, আপনারা আমাকে সেই সুযোগটি দিতে পারেন।
            </p>
          <h3>English:</h3>
          <p>
        This role offers the kind of challenge I am looking for, where I can apply the skills I have learned and grow professionally and personally.
           </p>
           <p className='my-2'>
         I believe you can give me that opportunity.
            </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-9">
        <AccordionTrigger>9. Where do you see yourself in five years?</AccordionTrigger>
         <AccordionContent className="flex flex-col gap-4 text-balance border-b-2 border-r-2 rounded-lg border-dark text-justify">
          <p>
           আমি এখন সব কিছু জানি না, তবে আমি বিশ্বাস করি, নিয়মিত শেখা আর টিম ওয়ার্ক এর মাধ্যমে আমি এমন একজন হয়ে উঠতে পারবো, যিনি কোড এবং টিমের উভয় ক্ষেত্রেই প্রভাব পেলেন।
           </p>
          <h3>English:</h3>
          <p>
        I don't know everything now, but I believe that through regular learning and teamwork, I can become someone who is strong in both code and team.
           </p>
          
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-10">
        <AccordionTrigger>10. Describe your ideal job, location, and company.</AccordionTrigger>
         <AccordionContent className="flex flex-col gap-4 text-balance border-b-2 border-r-2 rounded-lg border-dark text-justify">
          <p>
           আমি এমন একটি রোল খুঁজছি যেখানে আমি বাস্তব অভিজ্ঞতা ও টিমের কাছ থেকে শিখে প্রতিনিয়ত নিজেকে গড়ে তুলতে পারি।
           </p>
           <p className='my-2'>
          আমার আদর্শ কোম্পানি এমন, যারা স্কিল ডেভেলপমেন্ট, মেন্টরশিপ এবং দীর্ঘমেয়াদী ক্যারিয়ার গ্রোথকে গুরুত্ব দেয়।
            </p>
            
          <h3>English:</h3>
          <p>
       I am looking for a role where I can constantly develop myself by learning from real-world experiences and the team.
           </p>
           <p className='my-2'>
         My ideal company is one that values ​​skill development, mentorship, and long-term career growth.
            </p>
           
        </AccordionContent>
      </AccordionItem>
    </Accordion>
      </div>
  )
}
