const SCHEMES = [
  /* ============ CENTRAL GOVERNMENT ============ */
  {
    id: "nmms",
    name: "National Means-cum-Merit Scholarship (NMMS)",
    source: "Central Government",
    level: "School",
    category: "Merit-based",
    authority: "Ministry of Education, Govt. of India",
    ageClass: "Class 9 to Class 12 (selection exam held in Class 8)",
    income: "Family income up to ₹3,50,000 per year",
    amount: "₹12,000 per year (₹1,000/month)",
    desc: "Financial support for meritorious students from economically weaker sections to prevent dropout after Class 8, continuing till Class 12.",
    eligibility: [
      "Studying in Class 9–12 in a government, government-aided, or local body school",
      "Scored at least 55% marks in Class 7 (50% for SC/ST students)",
      "Must clear the state-level MAT + SAT selection exam",
      "Not already receiving another central government scholarship"
    ],
    documents: ["Class 7/8 mark sheet", "Income certificate", "Caste certificate (if applicable)", "Bank passbook (SBI or scheduled bank preferred)", "Aadhaar card"],
    apply: "Register on the National Scholarship Portal (NSP), select NMMS, and appear for the state SCERT exam (MAT + SAT).",
    link: "https://scholarships.gov.in/",
    deadline: "Applications generally open June–August each year (state-specific dates)"
  },
  {
    id: "yasasvi",
    name: "PM YASASVI (Top Class School & College Education for OBC, EBC, DNT students)",
    source: "Central Government",
    level: "Both",
    category: "OBC/EBC/DNT",
    authority: "Ministry of Social Justice & Empowerment",
    ageClass: "Class 9–12 and UG 1st/2nd year",
    income: "Family income up to ₹2,50,000 per year",
    amount: "Up to ₹1,25,000/year for school; tuition + ₹3,000/month living allowance + laptop assistance for college",
    desc: "Supports meritorious OBC, EBC and DNT (Denotified/Nomadic/Semi-Nomadic Tribe) students with tuition, hostel and living costs through school and the first two years of college.",
    eligibility: [
      "Belongs to OBC, EBC, or DNT category",
      "Studying in Class 9–12 or 1st/2nd year of UG in a recognised institution",
      "Family annual income not exceeding ₹2,50,000",
      "Must qualify the NTA-conducted YASASVI Entrance Test (YET)"
    ],
    documents: ["Caste/category certificate", "Income certificate", "Previous mark sheet", "Admission proof", "Bank details", "Aadhaar card"],
    apply: "Register for the YET exam on the NTA website, then apply through the National Scholarship Portal after qualifying.",
    link: "https://yet.nta.ac.in/",
    deadline: "YET registration typically opens July–August"
  },
  {
    id: "csss",
    name: "Central Sector Scheme of Scholarship for College and University Students",
    source: "Central Government",
    level: "College",
    category: "Merit-based",
    authority: "Department of Higher Education, Ministry of Education",
    ageClass: "UG students (first year onwards), up to postgraduation",
    income: "Family income up to ₹4,50,000 per year",
    amount: "₹12,000/year (UG) and ₹20,000/year (PG), for up to 5 years",
    desc: "Rewards students who scored well in Class 12 board exams and are pursuing regular undergraduate/postgraduate courses.",
    eligibility: [
      "Passed Class 12 with marks in the top 20th percentile of their board",
      "Pursuing a regular (not distance/correspondence) UG course",
      "Family income not exceeding ₹4.5 lakh per annum",
      "Not availing any other scholarship simultaneously"
    ],
    documents: ["Class 12 mark sheet", "Income certificate", "College admission/bonafide certificate", "Bank passbook", "Aadhaar card"],
    apply: "Apply online through the National Scholarship Portal under the 'Central Sector Scheme' category.",
    link: "https://scholarships.gov.in/",
    deadline: "Usually opens after Class 12 results, around July–October"
  },
  {
    id: "pragati",
    name: "AICTE Pragati Scholarship for Girls",
    source: "Central Government",
    level: "College",
    category: "Girls",
    authority: "All India Council for Technical Education (AICTE)",
    ageClass: "Diploma or Degree technical courses (1st year)",
    income: "Family income up to ₹8,00,000 per year",
    amount: "₹50,000 per year (tuition fee reimbursement + incidentals)",
    desc: "Encourages girl students to pursue technical education by covering tuition fees and other incidental expenses.",
    eligibility: [
      "Girl student admitted to 1st year of a technical diploma/degree course in an AICTE-approved institute",
      "Maximum of 2 girls per family can avail this",
      "Family income not exceeding ₹8 lakh per annum",
      "Not currently receiving a similar scholarship"
    ],
    documents: ["Admission letter", "Income certificate", "Class 12 mark sheet", "Aadhaar card", "Bank account details"],
    apply: "Apply through the AICTE Pragati/Saksham portal or the National Scholarship Portal.",
    link: "https://www.aicte-pragati-saksham-gov.in/",
    deadline: "Generally opens in the odd semester, around September–November"
  },
  {
    id: "saksham",
    name: "AICTE Saksham Scholarship for Specially-Abled Students",
    source: "Central Government",
    level: "College",
    category: "Disability",
    authority: "All India Council for Technical Education (AICTE)",
    ageClass: "Diploma or Degree technical courses (1st year)",
    income: "Family income up to ₹8,00,000 per year",
    amount: "₹50,000 per year (tuition fee reimbursement + incidentals)",
    desc: "Provides financial assistance to specially-abled students pursuing technical education, covering fees and daily expenses.",
    eligibility: [
      "At least 40% specified disability, certified by a competent medical authority",
      "Admitted to 1st year of an AICTE-approved technical diploma/degree course",
      "Family income not exceeding ₹8 lakh per annum"
    ],
    documents: ["Disability certificate", "Admission letter", "Income certificate", "Aadhaar card", "Bank passbook"],
    apply: "Apply through the AICTE Pragati/Saksham portal.",
    link: "https://www.aicte-pragati-saksham-gov.in/",
    deadline: "Generally opens around September–November"
  },
  {
    id: "premat",
    name: "Pre-Matric Scholarship for SC/ST/OBC/Minority Students",
    source: "Central Government",
    level: "School",
    category: "SC/ST/OBC/Minority",
    authority: "Ministry of Social Justice & Empowerment / Minority Affairs",
    ageClass: "Class 9 and Class 10",
    income: "Family income up to ₹2,50,000 per year (varies by category)",
    amount: "Admission fee + maintenance allowance (typically ₹225–₹4,500/year depending on category and hostel status)",
    desc: "Helps reduce dropout rates by supporting SC, ST, OBC and minority students financially in the final two years of secondary school.",
    eligibility: [
      "Studying in Class 9 or 10 in a recognised school",
      "Belongs to SC, ST, OBC, or notified minority community",
      "Family income within the category-specific limit",
      "Only two children per family can avail (for OBC category)"
    ],
    documents: ["Caste/minority certificate", "Income certificate", "Previous class mark sheet", "Bank passbook", "Aadhaar card"],
    apply: "Apply via the National Scholarship Portal under the relevant Pre-Matric scheme for your category.",
    link: "https://scholarships.gov.in/",
    deadline: "Typically opens July–October"
  },
  {
    id: "postmat",
    name: "Post-Matric Scholarship for SC/ST/OBC Students",
    source: "Central Government",
    level: "Both",
    category: "SC/ST/OBC",
    authority: "Ministry of Social Justice & Empowerment / Tribal Affairs",
    ageClass: "Class 11 onwards, including college and professional courses",
    income: "Family income up to ₹2,50,000 (SC/OBC); higher limits for ST in some states",
    amount: "Course fees + monthly maintenance allowance (varies by course and hostel status)",
    desc: "Supports SC, ST and OBC students financially through senior secondary school, college, and professional/technical courses.",
    eligibility: [
      "Studying in Class 11 or above, including diploma/degree/professional courses",
      "Belongs to SC, ST, or OBC category",
      "Family income within prescribed limit for the category",
      "Regular (non-distance) student at a recognised institution"
    ],
    documents: ["Caste certificate", "Income certificate", "Previous year mark sheet", "Fee receipt/bonafide certificate", "Bank passbook"],
    apply: "Apply through the National Scholarship Portal under 'Post-Matric Scholarship' for your category.",
    link: "https://scholarships.gov.in/",
    deadline: "Typically opens July–October"
  },
  {
    id: "inspire",
    name: "INSPIRE Scholarship for Higher Education (SHE)",
    source: "Central Government",
    level: "College",
    category: "Merit-based (Science)",
    authority: "Department of Science & Technology (DST)",
    ageClass: "BSc/Integrated MSc, ages 17–22 typically",
    income: "No income limit",
    amount: "₹80,000 per year",
    desc: "Encourages talented students to pursue basic and natural science courses at the undergraduate and postgraduate level.",
    eligibility: [
      "Among the top 1% in Class 12 board exam, OR",
      "Selected through JEE/NEET/State board top-rank criteria as notified",
      "Enrolled full-time in BSc, BS, or Integrated MSc in Natural/Basic Sciences",
      "Must maintain satisfactory academic performance to continue"
    ],
    documents: ["Class 12 mark sheet/rank card", "College admission proof", "Bank passbook", "Aadhaar card"],
    apply: "Register on the INSPIRE portal and upload required documents after taking admission.",
    link: "https://www.online-inspire.gov.in/",
    deadline: "Rolling, typically within a few months of starting the academic year"
  },
  {
    id: "bhmns",
    name: "Begum Hazrat Mahal National Scholarship for Minority Girls",
    source: "Central Government",
    level: "School",
    category: "Minority/Girls",
    authority: "Maulana Azad Education Foundation",
    ageClass: "Class 9 to Class 12",
    income: "Family income up to ₹2,00,000 per year",
    amount: "₹5,000–₹6,000 per year depending on class",
    desc: "Supports girl students from notified minority communities (Muslim, Christian, Sikh, Buddhist, Parsi, Jain) to continue schooling from Class 9 onward.",
    eligibility: [
      "Girl student belonging to a notified minority community",
      "Studying in Class 9, 10, 11, or 12",
      "Scored at least 50% marks in the previous qualifying exam",
      "Family income not exceeding ₹2 lakh per annum"
    ],
    documents: ["Minority community certificate", "Income certificate", "Previous mark sheet", "Bank passbook", "Aadhaar card"],
    apply: "Apply online through the Maulana Azad Education Foundation portal or National Scholarship Portal.",
    link: "https://scholarships.gov.in/",
    deadline: "Typically opens August–October"
  },
  {
    id: "obcfellow",
    name: "National Fellowship for Other Backward Classes (NF-OBC)",
    source: "Central Government",
    level: "College",
    category: "OBC",
    authority: "Ministry of Social Justice & Empowerment / UGC",
    ageClass: "M.Phil and PhD scholars (under 35 years, relaxable for women/differently-abled)",
    income: "Family income up to ₹6,00,000 per year",
    amount: "Monthly fellowship (~₹31,000–₹35,000) plus annual contingency grant",
    desc: "Provides financial support to OBC students pursuing research (M.Phil/PhD) in Indian universities and institutions.",
    eligibility: [
      "Belongs to Other Backward Classes (non-creamy layer)",
      "Qualified UGC-NET/JRF or equivalent and enrolled in M.Phil/PhD",
      "Family income not exceeding ₹6 lakh per annum",
      "Not receiving any other fellowship simultaneously"
    ],
    documents: ["OBC non-creamy-layer certificate", "Income certificate", "NET/JRF result", "University enrollment proof", "Aadhaar card"],
    apply: "Apply through the National Fellowship portal or UGC scholarship portal when applications open.",
    link: "https://scholarships.gov.in/",
    deadline: "Announced annually, usually in the second half of the year"
  },
  {
    id: "cseis",
    name: "Central Sector Interest Subsidy Scheme (Education Loan Interest Subsidy)",
    source: "Central Government",
    level: "College",
    category: "Education loan support",
    authority: "Department of Higher Education, Ministry of Education",
    ageClass: "UG / PG / professional / technical course students",
    income: "Family income up to ₹4,50,000 per year",
    amount: "Full interest subsidy on education loans (up to ₹10 lakh) during the moratorium period (course period + 1 year)",
    desc: "Waives the interest on education loans taken for technical/professional courses in India during the study period, easing repayment pressure for low-income families.",
    eligibility: [
      "Taken an education loan under the Indian Banks' Association (IBA) Model Education Loan Scheme",
      "Pursuing an approved technical/professional course in India",
      "Family income not exceeding ₹4.5 lakh per annum",
      "First-time loan for the first UG/PG degree"
    ],
    documents: ["Loan sanction letter", "Income certificate", "Admission proof", "Aadhaar card", "Bank loan account details"],
    apply: "Apply through the Vidya Lakshmi portal or your loan-sanctioning bank; subsidy is credited to the loan account.",
    link: "https://www.vidyalakshmi.co.in/",
    deadline: "Rolling, linked to loan disbursal date"
  },
  {
    id: "disabilitytop",
    name: "National Scholarship for Persons with Disabilities (Top Class Education)",
    source: "Central Government",
    level: "College",
    category: "Disability",
    authority: "Department of Empowerment of Persons with Disabilities",
    ageClass: "UG and PG students",
    income: "Family income up to ₹8,00,000 per year",
    amount: "Full tuition fee + maintenance allowance + book/stationery grant (varies by course)",
    desc: "Supports students with benchmark disabilities pursuing quality higher education in notified top-class institutions across India.",
    eligibility: [
      "At least 40% benchmark disability, certified by a competent authority",
      "Admitted to a notified 'Top Class' institution for UG/PG study",
      "Family income not exceeding ₹8 lakh per annum",
      "Not receiving another central scholarship for the same course"
    ],
    documents: ["Disability certificate (UDID preferred)", "Income certificate", "Admission letter", "Previous mark sheet", "Bank passbook"],
    apply: "Apply through the National Scholarship Portal under the disability scholarship category.",
    link: "https://scholarships.gov.in/",
    deadline: "Typically opens July–October"
  },

  /* ============ MAHARASHTRA STATE / MAHADBT PORTAL ============ */
  {
    id: "mahadbt-spgirls",
    name: "Savitribai Phule Scholarship for SC Girl Students (Class 5–10)",
    source: "Maharashtra State (MahaDBT)",
    level: "School",
    category: "SC/Girls",
    authority: "Social Justice & Special Assistance Dept., Govt. of Maharashtra",
    ageClass: "Class 5 to Class 10",
    income: "No income limit specified for this scheme",
    amount: "₹60 to ₹100 per month depending on class and hostel status",
    desc: "Encourages Scheduled Caste girl students in Maharashtra to continue schooling from Class 5 through Class 10 by offering a monthly stipend.",
    eligibility: [
      "Girl student belonging to Scheduled Caste (SC) or Navbouddha community",
      "Studying in Class 5 to Class 10 in a Maharashtra school",
      "Maharashtra domicile",
      "Regular attendance as per school records"
    ],
    documents: ["Caste certificate", "School bonafide certificate", "Aadhaar card", "Bank passbook (student or joint with parent)", "Domicile proof"],
    apply: "Apply online through the MahaDBT 2.0 portal (mahadbt2.maharashtra.gov.in) under the Social Justice Department schemes.",
    link: "https://mahadbt.maharashtra.gov.in/",
    deadline: "Applications open annually on MahaDBT, typically June onward"
  },
  {
    id: "mahadbt-goi-postmatric",
    name: "Government of India Post-Matric Scholarship (Maharashtra, via MahaDBT)",
    source: "Maharashtra State (MahaDBT)",
    level: "Both",
    category: "SC/ST/OBC",
    authority: "Social Justice / Tribal Development Dept., Govt. of Maharashtra",
    ageClass: "Class 11 onwards through postgraduate/professional courses",
    income: "Family income up to ₹2,50,000 per year (varies by category)",
    amount: "₹230 to ₹1,200 per month (varies by category and hosteller/day-scholar status) plus fee reimbursement",
    desc: "The Central Government's Post-Matric Scholarship routed through Maharashtra's MahaDBT portal for SC, ST and OBC students studying in the state.",
    eligibility: [
      "Maharashtra domicile, studying in Class 11 or above",
      "Belongs to SC, ST, or OBC category",
      "Family income within the category's prescribed limit",
      "Admitted through a recognised institution, including CAP-based admissions"
    ],
    documents: ["Caste certificate", "Income certificate", "Domicile certificate", "Previous mark sheet", "Admission/CAP allotment letter", "Bank passbook"],
    apply: "Apply on the MahaDBT 2.0 portal under the relevant department's Post-Matric Scholarship scheme.",
    link: "https://mahadbt.maharashtra.gov.in/",
    deadline: "Usually opens June onward; check current-year notification on MahaDBT"
  },
  {
    id: "mahadbt-shahu-merit",
    name: "Rajarshi Chhatrapati Shahu Maharaj Merit Scholarship (Class 11 & 12)",
    source: "Maharashtra State (MahaDBT)",
    level: "School",
    category: "SC/VJNT/SBC",
    authority: "Social Justice & Special Assistance Dept., Govt. of Maharashtra",
    ageClass: "Class 11 and Class 12",
    income: "No income limit for SC students under this scheme",
    amount: "₹300 per month for 10 months, for 2 years (Class 11 & 12)",
    desc: "A merit top-up scholarship, given in addition to other GOI scholarships and freeships, for high-scoring SC/VJNT/SBC students entering senior secondary school.",
    eligibility: [
      "Scored 75% or more in the SSC (Class 10) examination",
      "Belongs to SC, VJNT, or SBC category",
      "Currently studying in Class 11 or 12",
      "Maharashtra domicile"
    ],
    documents: ["Caste certificate", "Class 10 mark sheet", "Transfer/Leaving certificate", "Class 11 admission receipt", "Bank passbook"],
    apply: "Apply through the MahaDBT 2.0 portal under Social Justice Department schemes.",
    link: "https://mahadbt.maharashtra.gov.in/",
    deadline: "Opens after SSC results are declared, typically June–August"
  },
  {
    id: "mahadbt-ebc-shulk",
    name: "Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulk Shishyavrutti Yojana (EBC Fee Scheme)",
    source: "Maharashtra State (MahaDBT)",
    level: "College",
    category: "EBC/EWS",
    authority: "Directorate of Higher Education / Technical Education, Govt. of Maharashtra",
    ageClass: "Diploma, degree and postgraduate professional/technical courses admitted via CAP",
    income: "Full tuition fee waiver for income up to ₹2,50,000; partial benefit for income between ₹2.5–8 lakh",
    amount: "100% tuition fee reimbursement (income ≤ ₹2.5 lakh) or 50% (income ₹2.5–8 lakh)",
    desc: "Reimburses tuition fees for Economically Backward Class (EBC) and EWS students admitted to professional and technical courses through Maharashtra's Centralized Admission Process (CAP).",
    eligibility: [
      "Indian national with Maharashtra domicile",
      "Admitted to a diploma/degree/PG professional or technical course via CAP",
      "Not applicable to deemed or private universities",
      "Family income within the scheme's slab"
    ],
    documents: ["Income certificate", "Domicile certificate", "CAP admission/allotment letter", "Previous mark sheet", "Aadhaar-linked bank account"],
    apply: "Apply through the MahaDBT 2.0 portal under the Higher/Technical Education Department schemes.",
    link: "https://mahadbt.maharashtra.gov.in/",
    deadline: "Opens after CAP admissions each academic year"
  },
  {
    id: "mahadbt-tribal-freeship",
    name: "Tuition Fee & Exam Fee Freeship for Tribal (ST) Students",
    source: "Maharashtra State (MahaDBT)",
    level: "College",
    category: "ST",
    authority: "Tribal Development Department, Govt. of Maharashtra",
    ageClass: "Diploma, degree and professional course students",
    income: "No strict income ceiling for this specific freeship (verify current GR)",
    amount: "100% tuition fee and examination fee waiver",
    desc: "Waives tuition and exam fees for Scheduled Tribe students pursuing technical, professional or general higher education courses in Maharashtra.",
    eligibility: [
      "Belongs to Scheduled Tribe (ST) community",
      "Maharashtra domicile",
      "Admitted to a recognised diploma/degree/professional course",
      "Regular (non-distance) student"
    ],
    documents: ["Tribe certificate & validity certificate", "Domicile certificate", "Admission proof", "Previous mark sheet", "Bank passbook"],
    apply: "Apply through the MahaDBT 2.0 portal under Tribal Development Department schemes.",
    link: "https://mahadbt.maharashtra.gov.in/",
    deadline: "Opens after admissions each academic year"
  },
  {
    id: "mahadbt-vjnt-hostel",
    name: "Dr. Panjabrao Deshmukh Hostel Maintenance Allowance (VJNT/SBC)",
    source: "Maharashtra State (MahaDBT)",
    level: "College",
    category: "VJNT/SBC",
    authority: "Social Justice & Special Assistance Dept., Govt. of Maharashtra",
    ageClass: "Students in professional courses living in hostels",
    income: "Family income up to ₹1,00,000 per year (verify current limit)",
    amount: "Monthly maintenance allowance (varies by city category and course)",
    desc: "Provides a hostel maintenance allowance to VJNT and SBC category students enrolled in professional courses who live in a hostel attached to their college.",
    eligibility: [
      "Belongs to Vimukta Jati, Nomadic Tribes (VJNT) or Special Backward Class (SBC)",
      "Enrolled in a professional course and residing in an attached hostel",
      "Family income within the prescribed limit",
      "Maharashtra domicile"
    ],
    documents: ["Caste certificate", "Income certificate", "Hostel admission proof", "College bonafide certificate", "Bank passbook"],
    apply: "Apply through the MahaDBT 2.0 portal under Social Justice Department schemes.",
    link: "https://mahadbt.maharashtra.gov.in/",
    deadline: "Opens after college admissions each academic year"
  },
  {
    id: "mahadbt-obcgirls-prof",
    name: "Post-Matric Scholarship for OBC Girls in Professional Courses",
    source: "Maharashtra State (MahaDBT)",
    level: "College",
    category: "OBC/Girls",
    authority: "Other Backward Classes Welfare Dept., Govt. of Maharashtra",
    ageClass: "Girls admitted to professional/technical degree or diploma courses",
    income: "Family income up to ₹8,00,000 per year",
    amount: "Course fee support plus maintenance allowance (varies by course and hostel status)",
    desc: "Encourages OBC girl students to pursue professional courses like engineering, medicine, and management by covering fees and living costs.",
    eligibility: [
      "Girl student belonging to Other Backward Class (OBC)",
      "Admitted to a professional/technical course, typically via CAP",
      "Family income not exceeding ₹8 lakh per annum",
      "Maharashtra domicile"
    ],
    documents: ["OBC caste certificate", "Income certificate", "Admission/CAP letter", "Previous mark sheet", "Bank passbook"],
    apply: "Apply through the MahaDBT 2.0 portal under OBC Welfare Department schemes.",
    link: "https://mahadbt.maharashtra.gov.in/",
    deadline: "Opens after CAP admissions each academic year"
  },
  {
    id: "mahadbt-minority-higher",
    name: "Scholarship for Minority Community Students in Higher & Professional Courses",
    source: "Maharashtra State (MahaDBT)",
    level: "College",
    category: "Minority",
    authority: "Minority Development Department, Govt. of Maharashtra",
    ageClass: "UG and PG students",
    income: "Family income up to ₹8,00,000 per year",
    amount: "Tuition fee and examination fee reimbursement (amount varies by course)",
    desc: "Supports students from notified minority communities (Muslim, Christian, Buddhist, Sikh, Parsi, Jain) pursuing higher and professional education in Maharashtra.",
    eligibility: [
      "Belongs to a notified minority community",
      "Admitted to a recognised UG/PG or professional course",
      "Family income not exceeding ₹8 lakh per annum",
      "Maharashtra domicile"
    ],
    documents: ["Minority community certificate", "Income certificate", "Admission proof", "Previous mark sheet", "Bank passbook"],
    apply: "Apply through the MahaDBT 2.0 portal under Minority Development Department schemes.",
    link: "https://mahadbt.maharashtra.gov.in/",
    deadline: "Opens after admissions each academic year"
  },
  {
    id: "mahadbt-ews-fee",
    name: "Fee Reimbursement for EWS/Open Category Students Affected by Reservation (Medical/Dental)",
    source: "Maharashtra State (MahaDBT)",
    level: "College",
    category: "EWS",
    authority: "Directorate of Medical Education & Research, Govt. of Maharashtra",
    ageClass: "Medical and dental degree students",
    income: "Family income up to ₹8,00,000 per year (EWS criteria)",
    amount: "Fee reimbursement (amount depends on course and college fee structure)",
    desc: "Compensates open-category and EWS students admitted to medical and dental colleges who were affected by SEBC/EWS reservation changes.",
    eligibility: [
      "Belongs to open category or EWS as per state criteria",
      "Admitted to a medical or dental degree course in Maharashtra",
      "Family income within the EWS limit",
      "Maharashtra domicile"
    ],
    documents: ["EWS/income certificate", "Admission letter", "Domicile certificate", "Previous mark sheet", "Bank passbook"],
    apply: "Apply through the MahaDBT 2.0 portal under Medical Education Department schemes.",
    link: "https://mahadbt.maharashtra.gov.in/",
    deadline: "Opens after medical/dental admissions each academic year"
  },

  /* ============ PRIVATE / CORPORATE SCHOLARSHIPS ============ */
  {
    id: "reliance-ug",
    name: "Reliance Foundation Undergraduate Scholarship",
    source: "Private / Corporate",
    level: "College",
    category: "Merit-cum-need",
    authority: "Reliance Foundation",
    ageClass: "First-year undergraduate students (any stream)",
    income: "Family income up to ₹15,00,000 per year",
    amount: "Up to ₹2,00,000 over the course of the degree",
    desc: "Supports meritorious students from economically weaker backgrounds pursuing undergraduate studies in engineering, medicine, law, arts, commerce, or science.",
    eligibility: [
      "Scored at least 60% in Class 12 (varies by stream)",
      "Enrolled in the first year of a recognised UG program in India",
      "Family income not exceeding ₹15 lakh per annum",
      "Indian citizen"
    ],
    documents: ["Class 12 mark sheet", "College admission proof", "Income certificate/proof", "Bank passbook", "Aadhaar card"],
    apply: "Apply online through the Reliance Foundation Scholarships portal during the announced application window.",
    link: "https://www.reliancefoundation.org/",
    deadline: "Typically opens August–October each year"
  },
  {
    id: "tata-pankh",
    name: "Tata Capital Pankh Scholarship",
    source: "Private / Corporate",
    level: "Both",
    category: "Merit-cum-need",
    authority: "Tata Capital Limited (CSR initiative)",
    ageClass: "School (Class 9–12) and undergraduate students",
    income: "Family income up to ₹2,50,000 per year",
    amount: "₹10,000 to ₹1,00,000 depending on course and level",
    desc: "Supports students from underprivileged backgrounds from school through higher education, with a strong focus on transparency in selection.",
    eligibility: [
      "Studying in Class 9–12 or an undergraduate program",
      "Family income not exceeding ₹2.5 lakh per annum",
      "Good academic record in the previous qualifying exam",
      "Indian citizen"
    ],
    documents: ["Previous mark sheet", "Income certificate", "School/college bonafide certificate", "Bank passbook", "Aadhaar card"],
    apply: "Apply through the Buddy4Study or Tata Capital Pankh Scholarship portal during the open window.",
    link: "https://www.buddy4study.com/",
    deadline: "Announced annually; check current-year dates on the application portal"
  },
  {
    id: "adityabirla",
    name: "Aditya Birla Capital Foundation Scholarship",
    source: "Private / Corporate",
    level: "Both",
    category: "Merit-cum-need",
    authority: "Aditya Birla Capital Foundation",
    ageClass: "School and undergraduate/postgraduate students",
    income: "Family income up to ₹6,00,000 per year",
    amount: "Varies by course and category (typically ₹10,000–₹1,00,000+)",
    desc: "Aims to reach academically capable students from underprivileged backgrounds who otherwise lack resources to continue their education.",
    eligibility: [
      "Good academic standing in the previous qualifying exam",
      "Family income not exceeding ₹6 lakh per annum",
      "Enrolled in a recognised school or college",
      "Indian citizen"
    ],
    documents: ["Previous mark sheet", "Income certificate", "Admission/bonafide certificate", "Bank passbook", "Aadhaar card"],
    apply: "Apply through the Aditya Birla Capital Foundation or Buddy4Study scholarship portal.",
    link: "https://www.buddy4study.com/",
    deadline: "Announced annually; check current-year dates on the application portal"
  },
  {
    id: "hdfc-ecss",
    name: "HDFC Bank Parivartan Educational Crisis Scholarship Support (ECSS)",
    source: "Private / Corporate",
    level: "Both",
    category: "Crisis/need-based",
    authority: "HDFC Bank (CSR initiative)",
    ageClass: "Class 1 to postgraduate students",
    income: "Family income up to ₹2,50,000 per year",
    amount: "₹15,000 to ₹75,000 depending on course level",
    desc: "Provides emergency financial support to students facing sudden financial hardship (such as loss of an earning family member) that threatens to interrupt their education, at any stage from school to college, including mid-course years.",
    eligibility: [
      "Studying in school, undergraduate, or postgraduate program",
      "Facing a genuine financial crisis (e.g. death/job loss of parent/guardian)",
      "Family income not exceeding ₹2.5 lakh per annum",
      "Indian citizen"
    ],
    documents: ["Income proof", "Proof of crisis (e.g. death certificate, job loss letter)", "Admission/bonafide certificate", "Previous mark sheet", "Bank passbook"],
    apply: "Apply through the Buddy4Study ECSS scholarship portal when the window is open.",
    link: "https://www.buddy4study.com/",
    deadline: "Rolling/periodic windows through the academic year"
  },
  {
    id: "kotak-kanya",
    name: "Kotak Kanya Scholarship Programme",
    source: "Private / Corporate",
    level: "College",
    category: "Girls",
    authority: "Kotak Mahindra Bank / Kotak Education Foundation",
    ageClass: "Girl students in professional undergraduate courses",
    income: "Family income up to ₹6,00,000 per year (varies by cycle)",
    amount: "Course fee support (amount varies by institution and course)",
    desc: "Supports meritorious girl students pursuing professional undergraduate courses such as engineering, medicine, or management, to promote gender parity in higher education.",
    eligibility: [
      "Girl student admitted to a professional UG course",
      "Strong academic record in Class 12",
      "Family income within the scheme's prescribed limit",
      "Indian citizen"
    ],
    documents: ["Class 12 mark sheet", "Admission proof", "Income certificate", "Bank passbook", "Aadhaar card"],
    apply: "Apply through the Kotak Education Foundation or Buddy4Study scholarship portal.",
    link: "https://www.buddy4study.com/",
    deadline: "Announced annually; check current-year dates on the application portal"
  },
  {
    id: "jsw",
    name: "JSW Foundation Scholarship",
    source: "Private / Corporate",
    level: "College",
    category: "Merit-cum-need",
    authority: "JSW Foundation",
    ageClass: "Undergraduate students in engineering and science streams",
    income: "Family income up to ₹6,00,000 per year",
    amount: "Course/tuition fee support (amount varies by institution)",
    desc: "Helps financially disadvantaged students enrolled in engineering, science, and related technical courses complete their education.",
    eligibility: [
      "Enrolled in an engineering, science, or related UG course",
      "Family income not exceeding ₹6 lakh per annum",
      "Good academic record in the qualifying exam",
      "Indian citizen"
    ],
    documents: ["Class 12/qualifying mark sheet", "Admission proof", "Income certificate", "Bank passbook", "Aadhaar card"],
    apply: "Apply through the JSW Foundation or Buddy4Study scholarship portal.",
    link: "https://www.buddy4study.com/",
    deadline: "Announced annually; check current-year dates on the application portal"
  },
  {
    id: "bharti",
    name: "Bharti Foundation Scholarship Scheme",
    source: "Private / Corporate",
    level: "Both",
    category: "Merit-cum-need",
    authority: "Bharti Enterprises / Bharti Foundation",
    ageClass: "School and first-year undergraduate students",
    income: "Family income up to ₹4,00,000 per year",
    amount: "Course fee support and/or stipend (varies by program)",
    desc: "Enables deserving students from economically disadvantaged backgrounds to pursue schooling and undergraduate education without financial strain.",
    eligibility: [
      "Studying in school or 1st year of an undergraduate program",
      "Family income not exceeding ₹4 lakh per annum",
      "Consistent academic record",
      "Indian citizen"
    ],
    documents: ["Previous mark sheet", "Income certificate", "Admission/bonafide certificate", "Bank passbook", "Aadhaar card"],
    apply: "Apply through the Bharti Foundation or Buddy4Study scholarship portal.",
    link: "https://www.buddy4study.com/",
    deadline: "Announced annually; check current-year dates on the application portal"
  },
  {
    id: "ongc",
    name: "ONGC Foundation Scholarship",
    source: "Private / Corporate",
    level: "College",
    category: "SC/ST/OBC/General(EWS)",
    authority: "Oil and Natural Gas Corporation (ONGC) Foundation",
    ageClass: "Undergraduate students in engineering, management, geology, geophysics and medical courses",
    income: "Income criteria vary by category (SC/ST/OBC/EWS)",
    amount: "₹48,000 per year (approximate; varies by scheme cycle)",
    desc: "Supports meritorious students pursuing engineering, medical, management, or geosciences courses, with a portion of seats reserved for SC/ST/OBC/EWS categories.",
    eligibility: [
      "Enrolled in engineering/medical/management/geosciences UG course",
      "Merit-based selection with category-specific income limits",
      "Regular full-time student at a recognised institution",
      "Indian citizen"
    ],
    documents: ["Class 12/qualifying mark sheet", "Admission proof", "Category certificate (if applicable)", "Income certificate", "Bank passbook"],
    apply: "Apply through the ONGC Foundation or Buddy4Study scholarship portal.",
    link: "https://www.buddy4study.com/",
    deadline: "Announced annually; check current-year dates on the application portal"
  },
  {
    id: "sitaramjindal",
    name: "Sitaram Jindal Foundation Scholarship",
    source: "Private / Corporate",
    level: "Both",
    category: "Merit-cum-need",
    authority: "Sitaram Jindal Foundation",
    ageClass: "Class 11 onwards through postgraduate and professional courses",
    income: "Family income up to ₹1,50,000–₹6,00,000 per year (varies by course level)",
    amount: "Monthly stipend (amount varies by course and category)",
    desc: "One of India's longest-running private scholarship programs, supporting students from Class 11 through professional and postgraduate courses across most states.",
    eligibility: [
      "Studying in Class 11/12, diploma, UG, PG or professional course",
      "Family income within the course-specific limit",
      "Good academic record",
      "Indian citizen, resident of an eligible state"
    ],
    documents: ["Previous mark sheet", "Income certificate", "Admission/bonafide certificate", "Bank passbook", "Aadhaar card"],
    apply: "Apply through the Sitaram Jindal Foundation's official scholarship portal.",
    link: "https://www.sitaramjindalfoundation.org/",
    deadline: "Announced annually; check current-year dates on the official site"
  },
  {
    id: "ffe",
    name: "Foundation for Excellence (FFE) Scholarship",
    source: "Private / Corporate",
    level: "College",
    category: "Merit-cum-need",
    authority: "Foundation for Excellence, India Trust",
    ageClass: "Undergraduate engineering, medical, and select professional students",
    income: "Family income up to ₹3,50,000 per year",
    amount: "Course fee and/or monthly stipend support, plus mentoring",
    desc: "Supports high-achieving, economically disadvantaged students pursuing engineering, medical and other professional courses, alongside mentoring and career guidance.",
    eligibility: [
      "Secured admission through a merit-based entrance exam (e.g. JEE, NEET, state CET)",
      "Family income not exceeding ₹3.5 lakh per annum",
      "Enrolled in a recognised engineering/medical/professional UG course",
      "Indian citizen"
    ],
    documents: ["Entrance exam rank card", "Admission proof", "Income certificate", "Bank passbook", "Aadhaar card"],
    apply: "Apply through the Foundation for Excellence India official scholarship portal.",
    link: "https://ffe.org/india/",
    deadline: "Announced annually, generally after entrance exam counselling"
  },
  {
    id: "google-gen",
    name: "Generation Google Scholarship",
    source: "Private / Corporate",
    level: "College",
    category: "Technology",
    authority: "Google India",
    ageClass: "Undergraduate and graduate students in computer science/related fields",
    income: "No fixed income limit (need may be considered)",
    amount: "One-time award (amount varies by year; covers tuition-related costs)",
    desc: "Supports students from underrepresented groups in technology who are pursuing computer science, software engineering, or related degrees, along with networking opportunities with Google.",
    eligibility: [
      "Enrolled in or admitted to a CS/CE/related UG or PG program",
      "Demonstrated leadership or community involvement",
      "Belongs to a group underrepresented in technology (as defined by the program)",
      "Indian citizen studying in India (for the India-specific track)"
    ],
    documents: ["Academic transcript", "Admission proof", "Statement of purpose/essay", "Recommendation letter (if required)"],
    apply: "Apply online via the official Generation Google Scholarship application page when open.",
    link: "https://buildyourfuture.withgoogle.com/scholarships",
    deadline: "Typically opens once a year; check the official page for current dates"
  }
];

let activeSource = "All";
let activeLevel = "All";
let activeCat = "All";
let searchTerm = "";

const sources = ["All", "Central Government", "Maharashtra State (MahaDBT)", "Private / Corporate"];
const levels = ["All", "School", "College", "Both"];

function currentCategories(){
  const pool = activeSource === "All" ? SCHEMES : SCHEMES.filter(s => s.source === activeSource);
  return ["All", ...new Set(pool.map(s => s.category))];
}

function renderChips(){
  const sourceChips = document.getElementById('sourceChips');
  sourceChips.innerHTML = sources.map(s =>
    `<span class="chip ${s===activeSource?'active':''}" data-source="${s}">${s}</span>`
  ).join('');
  sourceChips.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => {
    activeSource = c.dataset.source; activeCat = "All"; renderChips(); renderCards();
  }));

  const levelChips = document.getElementById('levelChips');
  levelChips.innerHTML = levels.map(l =>
    `<span class="chip ${l===activeLevel?'active':''}" data-level="${l}">${l}</span>`
  ).join('');
  levelChips.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => {
    activeLevel = c.dataset.level; renderChips(); renderCards();
  }));

  const categories = currentCategories();
  const catChips = document.getElementById('catChips');
  catChips.innerHTML = categories.map(c =>
    `<span class="chip ${c===activeCat?'active':''}" data-cat="${c}">${c}</span>`
  ).join('');
  catChips.querySelectorAll('.chip').forEach(c => c.addEventListener('click', () => {
    activeCat = c.dataset.cat; renderChips(); renderCards();
  }));
}

function matchesFilters(s){
  const srcOk = activeSource === "All" || s.source === activeSource;
  const lvlOk = activeLevel === "All" || s.level === activeLevel || s.level === "Both";
  const catOk = activeCat === "All" || s.category === activeCat;
  const term = searchTerm.trim().toLowerCase();
  const searchOk = !term || (s.name + s.category + s.desc + s.authority + s.source).toLowerCase().includes(term);
  return srcOk && lvlOk && catOk && searchOk;
}

function renderCards(){
  const filtered = SCHEMES.filter(matchesFilters);
  const grid = document.getElementById('cardGrid');
  const empty = document.getElementById('emptyState');
  document.getElementById('resultsInfo').textContent = `${filtered.length} scheme${filtered.length!==1?'s':''} found (of ${SCHEMES.length} total)`;

  if(filtered.length === 0){
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }
  empty.style.display = 'none';

  grid.innerHTML = filtered.map(s => `
    <div class="card" data-id="${s.id}">
      <div class="tag-row">
        <span class="tag source">${s.source}</span>
        <span class="tag level">${s.level}</span>
        <span class="tag cat">${s.category}</span>
      </div>
      <h3>${s.name}</h3>
      <div class="amount">${s.amount}</div>
      <div class="desc">${s.desc}</div>
      <div class="footer-row">
        <span>${s.authority}</span>
        <span class="view-link">View details →</span>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
  });
}

function openModal(id){
  const s = SCHEMES.find(x => x.id === id);
  const modal = document.getElementById('modalContent');
  modal.innerHTML = `
    <button class="close" id="closeModal">✕</button>
    <div class="tag-row" style="margin-bottom:10px;">
      <span class="tag source">${s.source}</span>
      <span class="tag level">${s.level}</span>
      <span class="tag cat">${s.category}</span>
    </div>
    <h2>${s.name}</h2>
    <div class="sub">${s.authority}</div>
    <div class="stat-grid">
      <div class="stat"><div class="label">Education level</div><div class="value">${s.level}</div></div>
      <div class="stat"><div class="label">Age / Class</div><div class="value">${s.ageClass}</div></div>
      <div class="stat"><div class="label">Income limit</div><div class="value">${s.income}</div></div>
      <div class="stat"><div class="label">Benefit amount</div><div class="value">${s.amount}</div></div>
    </div>
    <section>
      <h4>Eligibility</h4>
      <ul>${s.eligibility.map(e => `<li>${e}</li>`).join('')}</ul>
    </section>
    <section>
      <h4>Documents required</h4>
      <ul>${s.documents.map(d => `<li>${d}</li>`).join('')}</ul>
    </section>
    <section>
      <h4>How to apply</h4>
      <ul><li>${s.apply}</li><li>Typical application window: ${s.deadline}</li></ul>
    </section>
    <a class="apply-btn" href="${s.link}" target="_blank" rel="noopener">Go to official portal</a>
    <div class="verify-note">Scheme amounts, income limits and deadlines are revised periodically. Please confirm current details on the official portal before applying.</div>
  `;
  document.getElementById('overlay').classList.add('open');
  document.getElementById('closeModal').addEventListener('click', closeModal);
}

function closeModal(){
  document.getElementById('overlay').classList.remove('open');
}

document.getElementById('overlay').addEventListener('click', (e) => {
  if(e.target.id === 'overlay') closeModal();
});
document.addEventListener('keydown', (e) => {
  if(e.key === 'Escape') closeModal();
});

document.getElementById('searchInput').addEventListener('input', (e) => {
  searchTerm = e.target.value;
  renderCards();
});

document.getElementById('clearFilters').addEventListener('click', () => {
  activeSource = "All"; activeLevel = "All"; activeCat = "All"; searchTerm = "";
  document.getElementById('searchInput').value = "";
  renderChips(); renderCards();
});

renderChips();
renderCards();

/* ================= LOGIN / RECOMMENDATION LOGIC ================= */

// Normalized eligibility tags per scheme id. "Any" = open to all categories (subject to income/other rules).
const SCHEME_TAGS = {
  nmms: ["Any"],
  yasasvi: ["OBC", "DNTEBC"],
  csss: ["Any"],
  pragati: ["Girls"],
  saksham: ["Disability"],
  premat: ["SC", "ST", "OBC", "Minority"],
  postmat: ["SC", "ST", "OBC"],
  inspire: ["Any"],
  bhmns: ["Minority", "Girls"],
  obcfellow: ["OBC"],
  cseis: ["Any"],
  disabilitytop: ["Disability"],
  "mahadbt-spgirls": ["SC", "Girls"],
  "mahadbt-goi-postmatric": ["SC", "ST", "OBC"],
  "mahadbt-shahu-merit": ["SC", "VJNTSBC"],
  "mahadbt-ebc-shulk": ["DNTEBC", "EWS"],
  "mahadbt-tribal-freeship": ["ST"],
  "mahadbt-vjnt-hostel": ["VJNTSBC"],
  "mahadbt-obcgirls-prof": ["OBC", "Girls"],
  "mahadbt-minority-higher": ["Minority"],
  "mahadbt-ews-fee": ["EWS", "General"],
  "reliance-ug": ["Any"],
  "tata-pankh": ["Any"],
  adityabirla: ["Any"],
  "hdfc-ecss": ["Any"],
  "kotak-kanya": ["Girls"],
  jsw: ["Any"],
  bharti: ["Any"],
  ongc: ["SC", "ST", "OBC", "General", "EWS"],
  sitaramjindal: ["Any"],
  ffe: ["Any"],
  "google-gen": ["Any"]
};

// Map a user's "currently studying in" answer to which scheme "level" values it satisfies.
function stageMatchesLevel(stage, level){
  if(level === "Both") return true;
  const schoolStages = ["Class 8","Class 9","Class 10","Class 11","Class 12"];
  const collegeStages = ["Diploma","UG","PG","PhD"];
  if(level === "School") return schoolStages.includes(stage);
  if(level === "College") return collegeStages.includes(stage);
  return false;
}

function parseIncomeLimit(text){
  if(/no (strict )?income limit|no income limit/i.test(text)) return Infinity;
  const matches = text.match(/[\d,]{4,}/g);
  if(!matches) return Infinity;
  const nums = matches.map(m => parseInt(m.replace(/,/g,''), 10)).filter(n => !isNaN(n) && n > 1000);
  if(nums.length === 0) return Infinity;
  return Math.max(...nums);
}

function categoryMatches(schemeId, profile){
  const tags = SCHEME_TAGS[schemeId] || ["Any"];
  if(tags.includes("Any")) return true;
  if(tags.includes(profile.category)) return true;
  if(profile.gender === "Female" && tags.includes("Girls")) return true;
  if(profile.disability === "Yes" && tags.includes("Disability")) return true;
  return false;
}

function computeRecommendations(profile, relaxIncome, relaxCategory){
  return SCHEMES.filter(s => {
    const levelOk = stageMatchesLevel(profile.stage, s.level);
    if(!levelOk) return false;
    if(!relaxCategory && !categoryMatches(s.id, profile)) return false;
    if(!relaxIncome && profile.income){
      const limit = parseIncomeLimit(s.income);
      if(limit !== Infinity && profile.income > limit) return false;
    }
    return true;
  });
}

function renderRecommendations(profile){
  let matches = computeRecommendations(profile, false, false);
  let note = "";
  if(matches.length === 0){
    matches = computeRecommendations(profile, true, false); // relax income
    if(matches.length > 0) note = " (income filter relaxed — please check limits in each scheme)";
  }
  if(matches.length === 0){
    matches = computeRecommendations(profile, true, true); // relax category too, level only
    if(matches.length > 0) note = " (showing schemes for your education level only)";
  }

  const recWrapper = document.getElementById('recWrapper');
  const recGrid = document.getElementById('recGrid');
  const recEmpty = document.getElementById('recEmpty');
  const recSub = document.getElementById('recSub');
  document.getElementById('recTitle').textContent = `Recommended for ${profile.name || 'you'}`;
  recSub.textContent = `${profile.stage} · ${profile.categoryLabel} · ${profile.school}${note}`;

  recWrapper.classList.remove('hidden');

  if(matches.length === 0){
    recGrid.innerHTML = '';
    recEmpty.classList.remove('hidden');
    return;
  }
  recEmpty.classList.add('hidden');
  recGrid.innerHTML = matches.map(s => `
    <div class="card" data-id="${s.id}">
      <div class="tag-row">
        <span class="tag source">${s.source}</span>
        <span class="tag level">${s.level}</span>
        <span class="tag cat">${s.category}</span>
      </div>
      <h3>${s.name}</h3>
      <div class="amount">${s.amount}</div>
      <div class="desc">${s.desc}</div>
      <div class="footer-row">
        <span>${s.authority}</span>
        <span class="view-link">View details →</span>
      </div>
    </div>
  `).join('');
  recGrid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.id));
  });
}

const categoryLabels = {
  General: "General", EWS: "EWS", OBC: "OBC", SC: "SC", ST: "ST",
  VJNTSBC: "VJNT/SBC", DNTEBC: "DNT/EBC", Minority: "Minority", NotSure: "Not sure"
};

function showApp(){
  document.getElementById('loginPage').classList.add('hidden');
  document.getElementById('appPage').classList.remove('hidden');
  window.scrollTo(0,0);
}

function handleProfileSubmit(){
  try{
    const nameVal = document.getElementById('fName').value.trim();
    const ageVal = document.getElementById('fAge').value.trim();
    const schoolVal = document.getElementById('fSchool').value.trim();
    const profile = {
      name: nameVal || "Student",
      age: ageVal || "",
      gender: document.getElementById('fGender').value,
      school: schoolVal || "your institution",
      stage: document.getElementById('fClass').value,
      category: document.getElementById('fCategory').value,
      income: document.getElementById('fIncome').value ? parseInt(document.getElementById('fIncome').value, 10) : null,
      disability: document.getElementById('fDisability').value
    };
    profile.categoryLabel = categoryLabels[profile.category] || profile.category;
    renderRecommendations(profile);
    showApp();
  }catch(err){
    console.error('Profile submit failed:', err);
    alert('Something went wrong while finding your schemes. Please try again, or use "Skip and browse all schemes instead".');
  }
}

document.getElementById('profileForm').addEventListener('submit', (e) => {
  e.preventDefault();
  handleProfileSubmit();
});

// Belt-and-suspenders: also trigger on a direct button click, in case
// the browser doesn't fire the form's submit event as expected.
document.querySelector('#profileForm button[type="submit"]').addEventListener('click', (e) => {
  e.preventDefault();
  handleProfileSubmit();
});

document.getElementById('skipLogin').addEventListener('click', () => {
  document.getElementById('recWrapper').classList.add('hidden');
  showApp();
});

document.getElementById('switchUser').addEventListener('click', () => {
  document.getElementById('loginPage').classList.remove('hidden');
  document.getElementById('appPage').classList.add('hidden');
  window.scrollTo(0,0);
});