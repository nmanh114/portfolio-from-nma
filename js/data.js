/**
 * CASE #070411: DOSSIER DATA REPOSITORY
 * SUBJECT: NGUYỄN MINH ÁNH
 * 
 * PRIMARY SOURCE OF TRUTH: Verified Student Portfolio
 * All factual records are preserved with 100% fidelity.
 */

window.DOSSIER_DATA = {
  subject: {
    caseNumber: "CASE #070411",
    name: "Nguyễn Minh Ánh",
    age: 19,
    gender: {
      vi: "Nữ",
      en: "Female"
    },
    status: {
      vi: "Sinh viên năm 2 — Kinh tế Quốc tế",
      en: "2nd Year Student — International Economics"
    },
    institution: {
      vi: "Đại học Ngoại thương (FTU)",
      en: "Foreign Trade University (FTU)"
    },
    cohort: "2025–2029",
    contact: {
      email: "nma070411@gmail.com",
      phone: "039xxxxxxx",
      location: "Hà Nội, Việt Nam"
    },
    tagline: {
      vi: "Tư duy định lượng • Dựa trên bằng chứng • Hướng tới kết quả thực chất",
      en: "Quantitative Thinking • Evidence-Based • Focused on Tangible Outcomes"
    },
    narrativeQuote: {
      vi: "Một tâm trí say mê những con số, tư duy duy lý, bằng chứng và sự theo đuổi không ngừng những giải pháp tối ưu hơn.",
      en: "A mind drawn to numbers, logic, evidence, and the relentless pursuit of better answers."
    },
    profileStatement: {
      vi: "Sinh viên năm 2 ngành Kinh tế quốc tế tại Đại học Ngoại thương, định hướng phát triển năng lực phân tích, dữ liệu và tư duy định lượng. Yêu thích làm việc với những con số, tư duy logic và giải quyết vấn đề dựa trên lý luận, bằng chứng và cơ sở khoa học.",
      en: "Second-year International Economics student at Foreign Trade University, committed to cultivating deep analytical competencies, data proficiency, and quantitative reasoning. Passionate about empirical figures, logical deduction, and solving complex problems grounded in rigorous evidence and scientific methodologies."
    },
    coreValues: [
      {
        id: "responsibility",
        title: { vi: "Trách nhiệm", en: "Responsibility" },
        desc: {
          vi: "Cam kết cao nhất với mọi công việc và nhiệm vụ được giao phó.",
          en: "Uncompromising accountability for all tasks and commitments."
        },
        badge: "VERIFIED TRAIT"
      },
      {
        id: "seriousness",
        title: { vi: "Nghiêm túc", en: "Seriousness" },
        desc: {
          vi: "Tác phong chuẩn mực, kỷ luật và cẩn trọng trong từng chi tiết.",
          en: "Discipline, precision, and methodical thoroughness in execution."
        },
        badge: "VERIFIED TRAIT"
      },
      {
        id: "rationality",
        title: { vi: "Duy lý", en: "Rationality" },
        desc: {
          vi: "Tư duy phản biện, lập luận dựa trên bằng chứng và sự khách quan.",
          en: "Critical reasoning grounded in empirical facts and objectivity."
        },
        badge: "CORE METRIC"
      },
      {
        id: "result_oriented",
        title: { vi: "Hướng kết quả", en: "Result-Oriented" },
        desc: {
          vi: "Đo lường sự nỗ lực bằng kết quả thực tế, kiên quyết loại bỏ 'nỗ lực ảo'.",
          en: "Measuring effort strictly by tangible output, rejecting illusory busyness."
        },
        badge: "PRIMARY DRIVER"
      }
    ],
    motivation: {
      title: { vi: "Động lực học tập", en: "Primary Motivation" },
      content: {
        vi: "Khám phá kiến thức mới và hiểu sâu hơn những điều đã biết.",
        en: "Uncovering new horizons of knowledge while deepening comprehension of foundational concepts."
      }
    },
    education: [
      {
        school: { vi: "Đại học Ngoại thương", en: "Foreign Trade University (FTU)" },
        major: { vi: "Kinh tế quốc tế", en: "International Economics" },
        period: "2025–2029",
        status: { vi: "Đang theo học (Năm 2)", en: "Currently Attending (Year 2)" },
        note: { vi: "Định hướng phân tích kinh tế định lượng & dữ liệu", en: "Focus on quantitative economic analysis & data modeling" }
      },
      {
        school: { vi: "THPT Chuyên Tuyên Quang", en: "Tuyen Quang High School for the Gifted" },
        major: { vi: "Lớp chuyên Toán", en: "Specialized Mathematics Class" },
        period: "2022–2025",
        status: { vi: "Tốt nghiệp", en: "Graduated" },
        note: { vi: "Nền tảng tư duy toán học và giải quyết vấn đề chuyên sâu", en: "Advanced mathematical rigor and problem-solving foundation" }
      }
    ]
  },

  evidence: [
    {
      id: "ev-gpa",
      category: { vi: "HỒ SƠ HỌC TẬP ĐẠI HỌC", en: "UNIVERSITY ACADEMIC RECORD" },
      title: { vi: "GPA Năm 1: 3.83 / 4.0", en: "Year 1 GPA: 3.83 / 4.0" },
      metric: { vi: "3.83 / 4.0", en: "3.83 / 4.0" },
      secondaryMetric: { vi: "8.98 / 10", en: "8.98 / 10" },
      detail: {
        vi: "Điểm trung bình tích lũy năm thứ nhất đạt 3.83/4.0 (tương đương 8.98/10). Minh chứng cho tính kỷ luật học thuật và sự nghiêm túc tại Trường Đại học Ngoại thương.",
        en: "Cumulative first-year GPA of 3.83/4.0 (equivalent to 8.98/10). Indisputable evidence of academic discipline and scholarly excellence at FTU."
      },
      deduction: {
        vi: "Kỷ luật học tập & Khả năng làm chủ khối lượng kiến thức học thuật bậc cao.",
        en: "Scholastic discipline & rapid mastery of demanding academic curriculum."
      },
      stamp: { vi: "BẢNG ĐIỂM ĐÃ XÁC THỰC", en: "VERIFIED TRANSCRIPT" },
      tag: "ACADEMIC DISCIPLINE",
      color: "#c5a059",
      proofImages: [
        "assets/images/evidence/ev-gpa-01.jpg",
        "assets/images/evidence/ev-gpa-02.jpg",
        "assets/images/evidence/ev-gpa-03.jpg",
      ]
    },
    {
      id: "ev-scholarship",
      category: { vi: "DANH HIỆU & HỌC BỔNG", en: "HONORS & SCHOLARSHIP" },
      title: { vi: "Học bổng Khuyến khích Học tập — Loại Giỏi", en: "Merit-Based Academic Scholarship — Excellent Tier" },
      metric: { vi: "HỌC KỲ 1", en: "SEMESTER 1" },
      secondaryMetric: { vi: "2025–2026", en: "2025–2026" },
      detail: {
        vi: "Nhận Học bổng Khuyến khích học tập loại Giỏi – Học kỳ 1, năm học 2025–2026 tại Trường Đại học Ngoại thương.",
        en: "Awarded the prestigious Encouragement of Study Scholarship at Excellent grade for Semester 1, Academic Year 2025–2026 at FTU."
      },
      deduction: {
        vi: "Sự ghi nhận chính thức từ nhà trường.",
        en: "Official university recognition reserved for top-tier academic performers."
      },
      stamp: { vi: "CÔNG NHẬN HỌC BỔNG", en: "MERIT RECOGNITION" },
      tag: "HONORS",
      color: "#dfb76c",
      proofImages: ["assets/images/evidence/ev-scholarship-01.jpg"]
    },
    {
      id: "ev-specialized",
      category: { vi: "CƠ SỞ TƯ DUY", en: "FOUNDATIONAL RIGOR" },
      title: { vi: "Học sinh Chuyên Toán — THPT Chuyên Tuyên Quang", en: "Math Specialization — Chuyen Tuyen Quang High School" },
      metric: { vi: "CHUYÊN TOÁN", en: "SPECIALIZED MATH" },
      secondaryMetric: { vi: "2022–2025", en: "2022–2025" },
      detail: {
        vi: "4 năm tôi luyện trong môi trường chuyên Toán chọn lọc. Xây dựng tư duy phân tích hệ thống, định lượng và sự tôn trọng đối với các quy luật logic chặt chẽ.",
        en: "Four formative years in an elite specialized mathematics environment. Cultivated systematic quantitative deduction and rigorous analytical discipline."
      },
      deduction: {
        vi: "Tư duy định lượng & Nền tảng phân tích cấu trúc vững chắc cho các bài toán kinh tế.",
        en: "Quantitative thinking & solid structural analysis base for economic modeling."
      },
      stamp: { vi: "NỀN TẢNG TƯ DUY", en: "FOUNDATION" },
      tag: "QUANTITATIVE THINKING",
      color: "#a62b2b",
      proofImages: [
        "assets/images/evidence/ev-specialized-01.jpg",
        "assets/images/evidence/ev-specialized-02.jpg",
        "assets/images/evidence/ev-specialized-03.jpg",
      ]
    },
    {
      id: "ev-math-11",
      category: { vi: "KỲ THI HỌC SINH GIỎI", en: "PROVINCIAL OLYMPIAD" },
      title: { vi: "Giải Nhì — Học sinh Giỏi cấp Tỉnh môn Toán Lớp 11", en: "2nd Prize — Provincial Mathematics Olympiad Grade 11" },
      metric: { vi: "GIẢI NHÌ", en: "2ND PRIZE" },
      secondaryMetric: { vi: "MÔN TOÁN KHỐI 11", en: "GRADE 11 MATH" },
      detail: {
        vi: "Đoạt Giải Nhì trong Kỳ thi chọn Học sinh giỏi cấp tỉnh môn Toán dành cho khối 11 tại tỉnh Tuyên Quang.",
        en: "Achieved Second Prize in the Tuyen Quang Provincial Mathematics Competition for Grade 11 students."
      },
      deduction: {
        vi: "Khả năng phân tích logic cấu trúc cao và năng lực giải quyết vấn đề toán học chuyên sâu.",
        en: "High-level structural logic and deep problem-solving capacity under rigorous assessment."
      },
      stamp: { vi: "GIẢI THƯỞNG CẤP TỈNH", en: "PROVINCIAL AWARD" },
      tag: "PROBLEM SOLVING",
      color: "#a62b2b",
      proofImages: ["assets/images/evidence/ev-math-11-01.jpg"]
    },
    {
      id: "ev-math-12",
      category: { vi: "KỲ THI HỌC SINH GIỎI", en: "PROVINCIAL OLYMPIAD" },
      title: { vi: "Giải Ba — Học sinh Giỏi cấp Tỉnh môn Toán Lớp 12", en: "3rd Prize — Provincial Mathematics Olympiad Grade 12" },
      metric: { vi: "GIẢI BA", en: "3RD PRIZE" },
      secondaryMetric: { vi: "MÔN TOÁN KHỐI 12", en: "GRADE 12 MATH" },
      detail: {
        vi: "Đoạt Giải Ba trong Kỳ thi chọn Học sinh giỏi cấp tỉnh môn Toán dành cho khối 12 tại tỉnh Tuyên Quang.",
        en: "Achieved Third Prize in the Tuyen Quang Provincial Mathematics Competition for Grade 12 students."
      },
      deduction: {
        vi: "Duy trì phong độ tư duy định lượng ổn định xuyên suốt các năm học cấp THPT.",
        en: "Consistently sustained competitive mathematical rigor across consecutive years."
      },
      stamp: { vi: "GIẢI THƯỞNG CẤP TỈNH", en: "PROVINCIAL AWARD" },
      tag: "PERSISTENT RIGOR",
      color: "#a62b2b",
      proofImages: ["assets/images/evidence/ev-math-12-01.jpg"]
    }
  ],

  caseRecords: [
    {
      id: "case-03",
      recordNumber: "CASE RECORD #03",
      title: {
        vi: "Gia sư Toán học — 4 Năm Giảng Dạy & Rèn Luyện Tư Duy",
        en: "Mathematics Tutoring — 4 Years of Didactic Investigation"
      },
      duration: {
        vi: "4 năm kinh nghiệm (2022 — Nay)",
        en: "4 Years Experience (2022 — Present)"
      },
      audience: {
        vi: "Học sinh THCS & THPT",
        en: "Middle & High School Students"
      },
      dossierSummary: {
        vi: "Giảng dạy và hỗ trợ học sinh THCS, THPT trong quá trình học tập môn Toán; rèn luyện khả năng giải quyết vấn đề, tư duy logic và diễn giải kiến thức theo cách dễ hiểu.",
        en: "Conducted personalized mathematics instruction for middle and high school students; fostered deep problem-solving frameworks, logical thinking, and the ability to demystify complex concepts into accessible mental models."
      },
      forensicBreakdown: [
        {
          label: { vi: "Diễn giải trực quan & Dễ hiểu", en: "Logical Explanation" },
          desc: {
            vi: "Chuyển hóa các định lý và bài toán trừu tượng thành các bước suy luận mạch lạc, phù hợp với tư duy từng học sinh.",
            en: "Deconstructing abstract theorems and multi-step proofs into intuitive, digestible logic calibrated to individual learning styles."
          }
        },
        {
          label: { vi: "Rèn luyện kỹ năng giải quyết vấn đề", en: "Problem Solving Frameworks" },
          desc: {
            vi: "Hướng dẫn học sinh phương pháp bóc tách giả thiết, nhận diện nút thắt và lựa chọn phương án tối ưu.",
            en: "Equipping students with analytical breakdown: isolating constraints, recognizing patterns, and executing optimal solution paths."
          }
        },
        {
          label: { vi: "Kiên nhẫn & Tinh thần trách nhiệm", en: "Patience & Accountability" },
          desc: {
            vi: "Đồng hành bền bỉ qua từng rào cản tư duy, giúp học sinh xây dựng sự tự tin và sự nghiêm túc trong học tập.",
            en: "Steadfast accompaniment through cognitive hurdles, cultivating self-reliance, academic resilience, and rigorous habits."
          }
        },
        {
          label: { vi: "Thích ứng linh hoạt với người học", en: "Adaptive Communication" },
          desc: {
            vi: "Quan sát phản ứng và tốc độ nắm bắt của học sinh để liên tục điều chỉnh nhịp độ và cách diễn đạt phù hợp.",
            en: "Constantly evaluating comprehension markers to adjust explanation velocity, tone, and analogies in real-time."
          }
        }
      ],
      transferableNote: {
        vi: "Deduction: 4 năm gia sư chứng minh năng lực sư phạm, tư duy giải quyết vấn đề, sự kiên nhẫn, tinh thần trách nhiệm và khả năng diễn giải các vấn đề phức tạp thành ngôn ngữ rõ ràng, dễ hiểu.",
        en: "Deduction: 4 years of tutoring establishes proven pedagogical clarity, structured problem solving, unwavering patience, high responsibility, and the capacity to articulate complex logic into transparent terms."
      },
      timeline: [
        { year: "2022", event: { vi: "Khởi đầu công việc gia sư môn Toán cho học sinh THCS", en: "Commenced math tutoring for middle school students" } },
        { year: "2023", event: { vi: "Mở rộng hỗ trợ học sinh THPT ôn luyện tư duy toán học và bài tập nâng cao", en: "Expanded support to high school students tackling advanced problem sets" } },
        { year: "2024", event: { vi: "Chuẩn hóa phương pháp giảng dạy lấy tư duy bản chất làm trọng tâm", en: "Standardized first-principles teaching methodology" } },
        { year: "2025–Nay", event: { vi: "Tiếp tục đồng hành, kết hợp tư duy kinh tế định lượng vào cách diễn giải", en: "Continuing tutoring, infusing quantitative economic reasoning into pedagogy" } }
      ]
    }
  ],

  toolkit: [
    {
      id: "office-suite",
      name: "Tin Học Văn Phòng",
      proofImages: [
        "assets/images/certificates/microsoft-word.jpg",
        "assets/images/certificates/microsoft-excel.jpg",
        "assets/images/certificates/microsoft-excel-02.jpg"
      ],
      objectType: { vi: "Bộ Hồ Sơ Nghiệp Vụ Văn Phòng", en: "Office Operations Dossier" },
      icon: "briefcase",
      badge: "CORE OFFICE SKILLS",
      coreCapabilities: [
        { vi: "Soạn thảo văn bản hành chính & báo cáo chuyên môn (Word)", en: "Drafting formal reports & executive texts (Word)" },
        { vi: "Xây dựng và thao tác bảng tổng hợp Pivot Table (Excel)", en: "Designing and analyzing Pivot Tables (Excel)" },
        { vi: "Tra cứu, đối chiếu dữ liệu giữa các sheets (Excel)", en: "Cross-sheet lookup & data reconciliation (Excel)" },
        { vi: "Xây dựng bài thuyết trình logic, trực quan (PowerPoint)", en: "Structuring persuasive, visual presentations (PowerPoint)" }
      ],
      investigationNote: {
        vi: "Bộ ba công cụ nền tảng phục vụ soạn thảo, xử lý dữ liệu và trình bày ý tưởng trong môi trường học thuật và công việc.",
        en: "A foundational toolkit for documentation, data processing, and idea presentation across academic and professional contexts."
      }
    },
    {  
      id: "ai",
      name: "Artificial Intelligence (AI)",
      proofImages: ["assets/images/certificates/ai-coursera.jpg"],
      objectType: { vi: "Công Cụ Phân Tích Hiện Đại", en: "Modern Analytical Tool" },
      icon: "cpu",
      badge: "AI AUGMENTATION",
      coreCapabilities: [
        { vi: "Hoàn thành khóa học AI Fundamentals trên Coursera", en: "Completed Coursera AI Fundamentals certification" },
        { vi: "Kỹ năng xây dựng prompt phù hợp với mục tiêu công việc", en: "Calibrated prompt engineering for task optimization" },
        { vi: "Sử dụng AI để nâng cao hiệu suất làm việc & nghiên cứu", en: "Deploying AI workflows to amplify research efficiency" }
      ],
      investigationNote: {
        vi: "Ứng dụng AI như một kính hiển vi tư duy: hỗ trợ tăng tốc tổng hợp dữ liệu nhưng luôn kiểm chứng lại bằng chứng.",
        en: "Utilized as an intellectual magnifier: accelerating data synthesis while always verifying primary evidence."
      }
    },
    {
      id: "data-business",
      name: "Data & Business (Datapot)",
      proofImages: ["assets/images/certificates/datapot-ai.jpg"],
      objectType: { vi: "Bản Đồ Vận Hành Doanh Nghiệp", en: "Enterprise Operational Blueprint" },
      icon: "briefcase",
      badge: "BUSINESS CONTEXT",
      coreCapabilities: [
        { vi: "Tham gia talkshow về AI của Datapot", en: "Participated in Datapot AI & Analytics talkshow" },
        { vi: "Tiếp cận quy trình vận hành thực tế trong doanh nghiệp", en: "Exposed to real-world corporate operational workflows" },
        { vi: "Tìm hiểu ứng dụng của AI và dữ liệu trong các ngành nghề", en: "Studied industry-wide applications of AI & data pipelines" }
      ],
      investigationNote: {
        vi: "Kết nối giữa phân tích dữ liệu lý thuyết với hoạt động vận hành và bài toán kinh doanh thực tế.",
        en: "Bridges theoretical quantitative data analysis with real-world enterprise operations and business realities."
      }
    }
  ],

  intelligenceFiles: [
    {
      id: "intel-ielts",
      code: "INTEL-01-ENG",
      title: { vi: "IELTS 7.0 Overall", en: "IELTS 7.0 Overall" },
      category: { vi: "NĂNG LỰC NGÔN NGỮ", en: "LANGUAGE INTELLIGENCE" },
      badge: "OFFICIALLY CERTIFIED",
      detail: {
        vi: "Đạt chứng chỉ IELTS 7.0. Đảm bảo khả năng tiếp cận sâu các tài liệu học thuật, nghiên cứu kinh tế quốc tế và tài liệu dữ liệu bằng tiếng Anh.",
        en: "Achieved IELTS 7.0 Overall. Enables rigorous research in international economics literature, academic journals, and technical documentation."
      },
      nextStep: {
        vi: "Đang tiếp tục tự học rèn luyện tiếng Anh giao tiếp thực tế.",
        en: "Continuously training to enhance real-world conversational fluency."
      },
      proofImages: ["assets/images/evidence/intel-ielts-01.jpg"]
    },
    {
      id: "intel-ai-coursera",
      code: "INTEL-02-CERT",
      title: { vi: "Chứng Nhận AI Fundamentals — Coursera", en: "AI Fundamentals Certificate — Coursera" },
      category: { vi: "CHỨNG NHẬN CHUYÊN MÔN", en: "CREDENTIAL FILE" },
      badge: "COURSE COMPLETED",
      detail: {
        vi: "Hoàn thành khóa học AI Fundamentals trên nền tảng Coursera; nắm vững các nguyên lý cốt lõi của AI và cách khai thác công cụ AI trong công việc.",
        en: "Completed Coursera's AI Fundamentals course; mastered core principles of artificial intelligence and applied productivity prompting."
      },
      nextStep: {
        vi: "Ứng dụng trực tiếp vào công việc và tối ưu hóa quy trình phân tích.",
        en: "Direct application to daily academic and analytical workflows."
      },
      proofImages: ["assets/images/evidence/intel-ai-coursera-01.jpg"]
    },
    {
      id: "intel-excel-lence",
      code: "INTEL-03-CERT",
      title: { vi: "MiniCourse: Excel-lence Awaits", en: "MiniCourse: Excel-lence Awaits" },
      category: { vi: "KHÓA HỌC NGẮN HẠN", en: "SHORT COURSE" },
      badge: "COURSE COMPLETED",
      detail: {
        vi: "Hoàn thành khóa học ngắn ngày do CTE FTU tổ chức; nắm được kỹ năng cơ bản để ứng dụng Excel xử lý dữ liệu.",
        en: "Completed a short course organized by CTE FTU; developed foundational skills for using Excel in data processing."
      },
      nextStep: {
        vi: "Tiếp tục nâng cao kỹ năng xử lý, đối chiếu và trực quan hóa dữ liệu bằng Excel.",
        en: "Continuing to strengthen Excel skills for data processing, reconciliation, and visualization."
      },
      proofImages: ["assets/images/evidence/intel-excel-lence-01.jpg"]
    },
    {
      id: "intel-chinese",
      code: "INTEL-04-LANG",
      title: { vi: "Tiếng Trung (Tự Học ~ HSK 3)", en: "Chinese (Self-Study ~ HSK 3 Level)" },
      category: { vi: "HỒ SƠ TỰ HỌC NGOẠI NGỮ", en: "AUTONOMOUS LANGUAGE" },
      badge: "AUTONOMOUS STUDY",
      detail: {
        vi: "Chủ động tự học tiếng Trung, trình độ hiện tại tương đương HSK 3. Thể hiện tính tự giác, kỷ luật bản thân và mong muốn mở rộng ngôn ngữ thương mại quốc tế.",
        en: "Self-driven study of Mandarin Chinese, currently at an estimated HSK 3 proficiency. Demonstrates strong self-discipline and strategic global trade readiness."
      },
      nextStep: {
        vi: "Tiếp tục tích lũy từ vựng và hướng tới các cấp độ HSK cao hơn.",
        en: "Continuing vocabulary expansion toward higher HSK milestones."
      },
      proofImages: [
        "assets/images/evidence/intel-chinese-01.jpg",
        "assets/images/evidence/intel-chinese-02.jpg"
      ]
    },
    {
      id: "intel-python-adv",
      code: "INTEL-05-TECH",
      title: { vi: "Python Nâng Cao (Đang Tự Học)", en: "Advanced Python (Currently Self-Studying)" },
      category: { vi: "HỒ SƠ NĂNG LỰC DỮ LIỆU", en: "DATA CAPABILITY" },
      badge: "ACTIVE STUDY",
      detail: {
        vi: "Đang tiếp tục chủ động tự học Python nâng cao để mở rộng khả năng xử lý dữ liệu phức tạp.",
        en: "Actively pursuing advanced Python independently to handle complex data manipulation."
      },
      nextStep: {
        vi: "Nghiên cứu sâu các gói thư viện dữ liệu lớn và thuật toán định lượng.",
        en: "Mastering quantitative libraries and advanced data frameworks."
      },
      proofImages: [
        "assets/images/evidence/intel-python-adv-01.jpg",
        "assets/images/evidence/intel-python-adv-02.jpg"
      ]
    },
    {
      id: "intel-talent",
      code: "INTEL-06-TALENT",
      title: { vi: "Tài Lẻ", en: "Hidden Talents" },
      category: { vi: "NĂNG KHIẾU NGOÀI LỀ", en: "EXTRACURRICULAR TALENT" },
      badge: "VERIFIED TALENT",
      detail: {
        vi: "Tự tin biểu diễn trước đám đông, mạnh dạn thể hiện tài năng ở đa dạng các lĩnh vực: múa, nhảy, diễn kịch, dẫn chương trình,...",
        en: "Confidently performs in front of crowds, boldly showcasing talent across diverse fields: dance, movement, and theatrical acting."
      },
      nextStep: {
        vi: "Tiếp tục trau dồi và tìm kiếm thêm cơ hội thể hiện bản thân.",
        en: "Continuing to hone these skills and seek further opportunities for self-expression."
      },
      videoUrl: "https://www.youtube-nocookie.com/embed/1f-mqtEsb50?si=WXQYdfskyVuYB5Ue",
      proofImages: [
        "assets/images/evidence/intel-talent-01.jpg",
        "assets/images/evidence/intel-talent-02.jpg",
        "assets/images/evidence/intel-talent-03.jpg",
        "assets/images/evidence/intel-talent-04.jpg",
        "assets/images/evidence/intel-talent-05.jpg",

      ]
    }  
  ],

  deduction: {
    title: {
      vi: "SUY LUẬN CỦA THÁM TỬ: BẢN CHẤT CỦA SỰ NỖ LỰC",
      en: "THE DETECTIVE'S DEDUCTION: THE TRUTH BEHIND EFFORT"
    },
    quote: {
      vi: "“Mình từng cho rằng, việc ngồi trên bàn học hàng giờ đồng hồ, hay thậm chí là cả ngày là đang chăm chỉ, nỗ lực. Nhưng sau đó, mình nhận ra mình chỉ đang ‘nỗ lực ảo’ khi kết quả nhận được thì không như mình mong đợi.”",
      en: "“I once believed that sitting at the desk for hours on end, or even an entire day, equated to working hard and being diligent. But later, I realized I was merely trapped in 'illusory effort' when the results failed to match expectations.”"
    },
    revelation: {
      vi: "Từ đó, mình thay đổi phương pháp học tập: lập kế hoạch chi tiết cho từng giờ học, xác định mình muốn học gì, học thế nào và học để làm gì. Mỗi cuối tuần, mình dành khoảng một giờ để nhìn lại kết quả đã đạt được. Cách tiếp cận này giúp mình xây dựng một lộ trình rõ ràng hơn, duy trì động lực và chủ động kiểm chứng liệu mình có đang đi đúng hướng hay không.",
      en: "From that moment, I revamped my methodology: drafting detailed plans for each study hour, defining explicitly WHAT to learn, HOW to learn, and WHY to learn. Every weekend, I dedicate roughly an hour to review achieved results. This approach empowers me to build a lucid roadmap, sustain motivation, and proactively verify whether I am truly on the right track."
    },
    coreTakeaway: {
      vi: "COI TRỌNG HIỆU QUẢ THỰC TẾ HƠN SỰ CHĂM CHỈ BIỂU DIỄN",
      en: "VALUES EFFECTIVE WORK OVER PERFORMATIVE HARD WORK"
    },
    steps: [
      {
        num: "01",
        label: { vi: "NGỒI LÌ HÀNG GIỜ", en: "LONG PASSIVE HOURS" },
        subtitle: { vi: "Cái bẫy của 'Nỗ lực ảo'", en: "The trap of illusory effort" },
        desc: {
          vi: "Dành cả ngày ngồi vào bàn học nhưng thiếu mục tiêu rõ ràng. Mệt mỏi nhưng kết quả không tương xứng.",
          en: "Spending entire days at the desk without crisp targets. Cognitive fatigue without proportional yield."
        },
        status: "REJECTED HYPOTHESIS",
        accent: "crimson"
      },
      {
        num: "02",
        label: { vi: "CHẤT VẤN PHƯƠNG PHÁP", en: "QUESTION THE METHOD" },
        subtitle: { vi: "Bóc tách nguyên nhân gốc rễ", en: "Dissecting root causes" },
        desc: {
          vi: "Dũng cảm thừa nhận phương pháp cũ không hiệu quả. Đặt câu hỏi: Học cái gì? Học thế nào? Học để làm gì?",
          en: "Confronting inefficiencies with analytical honesty: What to learn? How to learn? And for what purpose?"
        },
        status: "DEDUCTIVE TURNING POINT",
        accent: "brass"
      },
      {
        num: "03",
        label: { vi: "LẬP KẾ HOẠCH TỪNG GIỜ", en: "HOURLY EXECUTION PLAN" },
        subtitle: { vi: "Mục tiêu cụ thể & Rõ ràng", en: "Discrete, bounded units" },
        desc: {
          vi: "Chia nhỏ thời gian thành từng phiên học có mục đích xác định, phương pháp cụ thể và kết quả cần đạt.",
          en: "Segmenting study sessions into distinct operational blocks with defined methods and concrete outputs."
        },
        status: "SYSTEMIC RECONSTRUCTION",
        accent: "gold"
      },
      {
        num: "04",
        label: { vi: "ĐỐI CHIẾU CUỐI TUẦN", en: "WEEKLY CALIBRATION" },
        subtitle: { vi: "1 giờ kiểm chứng mỗi tuần", en: "1 hour weekly audit" },
        desc: {
          vi: "Dành 1 giờ mỗi cuối tuần để đo lường kết quả thực tế, kiểm tra độ lệch và chủ động điều chỉnh lộ trình.",
          en: "Dedicating 60 minutes every weekend to audit actual results, inspect variances, and recalibrate course."
        },
        status: "CONTINUOUS FEEDBACK LOOP",
        accent: "parchment"
      },
      {
        num: "05",
        label: { vi: "HIỆU SUẤT CAO", en: "PEAK EFFICACY" },
        subtitle: { vi: "GPA 3.83/4.0 & Học bổng loại Giỏi", en: "GPA 3.83/4.0 & Excellence Award" },
        desc: {
          vi: "Kết quả được chứng minh qua thực tiễn: thành tích học tập ổn định tại FTU và sự vững vàng trong tư duy.",
          en: "Empirically validated by outstanding first-year GPA and prestigious merit scholarship at Foreign Trade University."
        },
        status: "CONFIRMED OUTCOME",
        accent: "highlight"
      }
    ],
    verdict: {
      vi: "KẾT LUẬN ĐIỀU TRA: Nguyễn Minh Ánh là đối tượng có tư duy logic, sắc sảo. Cô không cố tỏ ra bận rộn ảo, mà luôn xây dựng kế hoạch học tập chỉn chu, chi tiết và liên tục tối ưu hóa năng suất công việc.",
      en: "INVESTIGATION VERDICT: Nguyen Minh Anh exhibits exceptional metacognitive maturity. She rejects performative busyness, establishing a disciplined, evidence-driven, and continuously calibrated operating system."
    }
  },

  nextCase: {
    badge: "STATUS: ONGOING INVESTIGATION",
    title: {
      vi: "VỤ ÁN TIẾP THEO: HÀNH TRÌNH ĐANG MỞ RỘNG",
      en: "THE NEXT CASE: AN EXPANDING INVESTIGATION"
    },
    subtitle: {
      vi: "Vụ án chưa khép lại. Nhiều manh mối mới đang tiếp tục được hình thành trên chặng đường học thuật và phát triển.",
      en: "The case remains open. Fresh clues, competencies, and discoveries are continuously emerging."
    },
    currentVectors: [
      {
        code: "VECTOR-01",
        title: { vi: "Python Nâng Cao & Phân Tích Dữ Liệu", en: "Advanced Python & Analytical Engineering" },
        desc: {
          vi: "Nâng cao năng lực lập trình dữ liệu, tối ưu hóa các hàm xử lý và áp dụng vào nghiên cứu kinh tế lượng.",
          en: "Deepening data programming, algorithmic optimization, and applying tools to quantitative econometric inquiries."
        },
        tag: "IN PROGRESS"
      },
      {
        code: "VECTOR-02",
        title: { vi: "Nâng Cấp Ngoại Ngữ Đa Trục", en: "Multilingual Intelligence (English & Chinese)" },
        desc: {
          vi: "Luyện phản xạ tiếng Anh giao tiếp tự nhiên và chinh phục các nấc thang HSK tiếng Trung tiếp theo.",
          en: "Cultivating natural conversational English fluency while ascending to higher HSK Chinese milestones."
        },
        tag: "IN PROGRESS"
      },
      {
        code: "VECTOR-03",
        title: { vi: "Phân Tích Kinh Tế Quốc Tế Chuyên Sâu", en: "International Economic Analysis" },
        desc: {
          vi: "Phát huy nền tảng Toán Chuyên để tiếp cận sâu sắc các mô hình thương mại và phân tích chính sách kinh tế.",
          en: "Leveraging mathematical pedigree to decode international trade models and empirical policy evaluations."
        },
        tag: "ACADEMIC HORIZON"
      }
    ],
    modularSlots: [
      {
        type: "PROJECTS",
        title: { vi: "Dự Án Nghiên Cứu & Dữ Liệu", en: "Research & Data Projects" },
        status: { vi: "CHỜ DỮ LIỆU THỰC ĐỊA", en: "AWAITING FIELD DATA" },
        note: {
          vi: "Mục dự án nghiên cứu học thuật và phân tích dữ liệu chuyên sâu sẽ được cập nhật khi hoàn thành các chặng tiếp theo tại FTU.",
          en: "Academic econometric research and specialized data analysis projects will be logged as they reach completion."
        }
      },
      {
        type: "ACTIVITIES",
        title: { vi: "Hoạt Động Ngoại Khóa & CLB", en: "Extracurriculars & Societies" },
        status: { vi: "CHỜ DỮ LIỆU THỰC ĐỊA", en: "AWAITING FIELD DATA" },
        note: {
          vi: "Các hoạt động câu lạc bộ và phong trào sinh viên sẽ được bổ sung khi có thêm hồ sơ ghi nhận.",
          en: "Student association engagements and extracurricular initiatives will be documented as field data is logged."
        }
      },
      {
        type: "INTERNSHIP",
        title: { vi: "Kinh Nghiệm Thực Tập Doanh Nghiệp", en: "Corporate Internship & Practice" },
        status: { vi: "CHỜ DỮ LIỆU THỰC ĐỊA", en: "AWAITING FIELD DATA" },
        note: {
          vi: "Hồ sơ thực tập và cọ xát doanh nghiệp thực tế sẽ được tích hợp trong các kỳ học chuyên ngành tới.",
          en: "Professional corporate internship records will be integrated in upcoming specialized semesters."
        }
      },
      {
        type: "CAREER_FOCUS",
        title: { vi: "Định Hướng Nghề Nghiệp Chuyên Sâu", en: "Specialized Career Trajectory" },
        status: { vi: "ĐANG ĐỊNH HÌNH", en: "IN FORMATION" },
        note: {
          vi: "Tập trung xây dựng nền tảng cốt lõi về tư duy định lượng, dữ liệu và kinh tế trước khi lựa chọn chuyên môn hóa hẹp.",
          en: "Focused on securing the foundational triad of quantitative reasoning, data analysis, and economic theory before narrowing down."
        }
      }
    ]
  },

  footer: {
    caseStatus: "CASE STATUS: OPEN / ONGOING",
    subjectHeader: "SUBJECT: NGUYỄN MINH ÁNH",
    dossierId: "FTU-IE-070411",
    motto: {
      vi: "“Mọi câu trả lời đúng đắn đều bắt đầu từ một câu hỏi tốt hơn.”",
      en: "“Every sound answer begins with a better question.”"
    },
    subMotto: {
      vi: "Tư duy duy lý • Phân tích định lượng • Tôn trọng sự thật khách quan",
      en: "Rational Inquiry • Quantitative Rigor • Devotion to Empirical Truth"
    },
    email: "nma070411@gmail.com",
    phone: "039xxxxxxx"
  }
};
