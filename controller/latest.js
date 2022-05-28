const get = (req, res) => {
  console.log("Request Param", req.params);
  const latest = [
    {
      id: "4",
      category: "TollyWood",
      type: "Latest",
      img: "https://images.newindianexpress.com/uploads/user/imagelibrary/2022/1/1/w900X450/Go_Girl.jpg?w=640&dpr=1.3",
      det: "Go Girl: Tollywood heroines get a professional identity finally, but is that change enough?",
      date: "Published: 02nd January 2022 05:00 AM",
      description:
        "Satyadevs Skylab is all set for its OTT Release. SonyLIV bagged the rights of the film and has lined up the OTT Premiere. The film will be out on January 14th as Sankranthi Special. The official announcement has been made.",
    },

    {
      id: "7",
      category: "Technology",
      type: "Latest",
      img: "https://i.gadgets360cdn.com/large/intel_core_i9_12900ks_intel_youtube_1641564934678.jpg?downsize=950:*",
      det: "Intel Core i9-12900KS Announced at CES With Massive 5.5GHz Clock Speed on a Single Core",
      date: "by David Delima, 7 January 2022",
      description:
        "Intel Core i9-12900KS was announced by the company at CES 2022. The 12th Gen Intel Core ‘Alder Lake' CPU offers a 5.5GHz boost clock speed on a single core. The new Intel Core i9-12900KS is also capable of functioning at 5.2GHz on all cores while performing heavy multi-core tasks, according to the company. This is the first Special Edition processor for desktops from Intel since the Core i9-9900KS in 2019 and will be available to manufacturers in Q1 2022, according to the company.The new processor unveiled by Intel is similar to the Core i9-12900K CPU and sports eight performance cores and eight efficiency cores. The new 12th Gen Alder Lake Intel Core i9-12900KS offers up to 40 percent higher performance generation-on-generation, according to the company. The company also ran a live demo of the CPU running Hitman 3 at CES 2022, where the CPU was shown to maintain a clock speed of 5.2GHz on all eight performance cores. Intel is yet to reveal details of exactly how much power the new Intel Core i9-12900KS will draw, or how much the CPU will cost.",
    },

    {
      id: "11",
      category: "Jobs",
      type: "Latest",
      img: "https://images.news18.com/telugu/uploads/2022/01/HAL-Jobs-16416411333x2.jpg?impolicy=website&width=509&height=339",
      det: "Jobs in Hyderabad: Apprentice jobs in Hyderabad .. Qualifications, application process",
      date: "Published by: Sharath Chandra January 08, 2022, 17:04 IST",
      description:
        "Hindustan Aeronautics Limited has issued a notification for the replacement of multiple posts in Hyderabad . Through this notification , Technician Apprentice Trainee and Graduate Apprentice Trainee jobs will be filled. The notification details for this post need to be downloaded after registering on the official website. Without any examination .. HAL will replace these posts on academic merit basis only, reservation. Selected candidates will be given a stipend of Rs. 8,000 to Rs. 9,000 depending on the post. Application ProcessIs completely online. The application process will run from January 7, 2022 to January 17, 2022. For notification and application process, one has to visit the official website https://portal.mhrdnats .gov.in/ Selection Procedure ..- Selection process will be done on the basis of notification only. - Applications will be accepted from candidates in a timely manner. - Applicants will be shortlisted on the basis of academic merit and reservation. - The final selection will be made after reviewing the credentials. - Action will be taken against those who submit false credentials. Application Procedure ..  Step 1: Candidates should first open the website  Step 2: Click on Register here on the home page.  Step 3: Candidates should complete the registration with their details. AIIMS Jobs: 118 jobs in AIIMS .. Salary above Rs.  Step 4: Wait a day for enrollment verification and approval.  Step 5: After completing the verification and approval, re- open the website  Step 6: Click on Login and login with details  Step 7: Then click on the Establishment Request menu.  Step 8: Click on Find Establishment. Step 9: Type Hindustan Aeronautics Limited Apprentice and search. Step 10: Then click on the Apply button and apply. Step 11: In addition, the format of the application form is placed in the notification. Step 12: The deadline to apply is January 17, 2022.",
    },
  ];
  if (req.query.type) {
    const newLatest = latest.filter(
      (val) =>
        val.type.toLocaleLowerCase() == req.query.type.toLocaleLowerCase()
    );
    res.send(newLatest);
  } else {
    res.send(latest);
  }
};

module.exports.latestGet = get;
