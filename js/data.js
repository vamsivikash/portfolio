// Personal data for the portfolio
const portfolioData = {
    profile: {
        name: "Vamsi Vikash",
        title: "Senior Solutions Architect, Serverless Specialist",
        bio: "Passionate about serverless technologies and helping organizations build scalable, efficient applications on AWS.",
        profileImage: "assets/images/ProfilePic.jpeg",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/vamsivikash",
            github: "https://github.com/vamsivikash", 
            twitter: "https://twitter.com/vamsi_vikash"
        }
    },
    
    experience: [
        {
            period: "2016 - 2025",
            role: "Senior Solutions Architect, Serverless Specialist",
            company: "AWS"
        },
        {
            period: "2015 - 2016",
            role: "Graduate School Programmer",
            company: "NC State"
        },
        {
            period: "2012 - 2014",
            role: "Web Developer",
            company: "TCS"
        }
    ],
    
    talks: [
        {
            title: "SVS315 - Automating resilience with regional awareness for your applications",
            event: "AWS re:Invent 2023",
            description: "",
            slidesUrl: "https://drive.google.com/file/d/1VsZncN2qCqPPtPkDoZ8l0JFf7Ug0NluN/view?usp=drive_link",
            videoUrl: null,
            eventLink: "",
            date: "2023-11-27"
        },
        {
            title: "SVS312 - AWS Lambda performance tuning: Best practices and guidance",
            event: "AWS re:Invent 2024",
            description: "Session repeated twice due to demand",
            slidesUrl: "https://drive.google.com/file/d/1lvaIcAIDqC1KCwTDFda2qB7Y-YJwi8C6/view?usp=drive_link",
            videoUrl: null,
            eventLink: "",
            date: "2024-11-28"
        },
        {
            title: "Applying Generative AI to CVE Remediation with Datadog observability",
            event: "DASH 2025 - Datadog Conference",
            description: "",
            slidesUrl: null,
            videoUrl: "https://drive.google.com/file/d/18HBElNcL_p67gTzuyXEir6bS20ujryBV/view?usp=sharing",
            eventLink: "https://www.linkedin.com/posts/activity-7339063951122436099-jAH4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAYe7fgBr-XzMBNYB7zIdrcQ6qD6dcYh64o",
            date: "2025-06-09"
        },
        {
            title: "Accelerating application development with AWS Serverless and Datadog",
            event: "DASH 2023 - Datadog Conference",
            description: "",
            slidesUrl: "https://drive.google.com/drive/u/0/folders/19EqBL8GAJTqcvRotF4WiB6F3lOmCiVoZ",
            videoUrl: null,
            eventLink: "https://www.datadoghq.com/dash/",
            date: "2023-08-02"
        },
        {
            title: "Serverless Applications - Cost and Performance Optimization",
            event: "AWS Innovate",
            description: "",
            slidesUrl: "https://drive.google.com/drive/u/0/folders/19EqBL8GAJTqcvRotF4WiB6F3lOmCiVoZ",
            videoUrl: "https://drive.google.com/file/d/19jWCHkZsEwjMKh51aQ-B1T1Phcj8jnv2/view?usp=drive_link",
            eventLink: "",
            date: "2023-10-19"
        },
        {
            title: "Building Serverless Workload & Architectures",
            event: "Freshworks Developer Summit",
            description: "",
            slidesUrl: "https://www.linkedin.com/posts/freshworks-inc_freshworks-developers-summit-meet-the-speakers-activity-6995782252399878145-ezbU?utm_source=share&utm_medium=member_desktop&rcm=ACoAAAYe7fgBr-XzMBNYB7zIdrcQ6qD6dcYh64o",
            videoUrl: null,
            eventLink: "",
            date: "2023-11-17"
        },

        {
            title: "Build event-driven agentic AI applications with Serverless architectures",
            event: "IEEE Cloud Summit",
            description: "",
            slidesUrl: "https://drive.google.com/file/d/1koyUX4Ygw3phG4Y6d1q4D0PKpUczMikw/view?usp=drive_link",
            videoUrl: null,
            date: "2025-06-26"
        },
         {
            title: "Building Agentic AI applications on AWS",
            event: "Virtual Event",
            description: "How to build event-driven Agentic AI applications using Serverless ",
            slidesUrl: "https://drive.google.com/file/d/1S7ZtEgBTehg1x_gsD8qOg8X_nW8XF3yW/view?usp=drive_link",
            videoUrl: null,
            date: "2025-05-28"
        },
        {
            title: "Enhance an event-driven video streaming application with AWS Serverless",
            event: "AWS LA Summit 2024",
            description: "Workshop",
            slidesUrl: "https://drive.google.com/file/d/1rA-_W8wau_G_WQcRFqfHPvjKd4vIZnAx/view?usp=drive_link",
            videoUrl: null,
            date: "2025-05-22"
        },
    ],
    
    publications: [
        // Add your publications here
        {
            title: "Caching data and configuration settings with AWS Lambda extensions",
            journal: "AWS Compute Blog",
            date: "2021-03-02",
            url: "https://aws.amazon.com/blogs/compute/caching-data-and-configuration-settings-with-aws-lambda-extensions/",
            authors: [""]
        },
        {
            title: "How to scan your AWS Lambda functions with Amazon Inspector",
            journal: "AWS Security Blog",
            date: "2023-05-03",
            url: "https://aws.amazon.com/blogs/security/how-to-scan-your-aws-lambda-functions-with-amazon-inspector/",
            authors: [""]
        },
        {
            title: "Simplifying private API integrations with Amazon EventBridge and AWS Step Functions",
            journal: "AWS Compute Blog",
            date: "2025-03-27",
            url: "https://aws.amazon.com/blogs/compute/simplifying-private-api-integrations-with-amazon-eventbridge-and-aws-step-functions-2/",
            authors: [""]
        },
        {
            title: "Bosch accelerates IoT Deployments using AWS Serverless and AWS IoT Core",
            journal: "Bosch Customer Story",
            date: "2023-08-25",
            url: "https://aws.amazon.com/ru/solutions/case-studies/bosch-case-study-and-video/?nc1=h_ls",
            authors: [""]
        },
        {
            title: "Juniper Networks saves customers millions of dollars using AWS Lambda",
            journal: "Juniper Customer Story",
            date: "2023-10-25",
            url: "https://aws.amazon.com/solutions/case-studies/juniper-networks-case-study/?did=cr_card&trk=cr_card",
            authors: [""]
        },
        {
            title: "Learn to migrate Datapipeline workloads to AWS Step Functions",
            journal: "Datapipeline Migration",
            date: "2023-08-03",
            url: "https://github.com/aws-samples/datapipeline-migration-samples",
            authors: [""]
        },
        {
            title: "Learn how Modulate was able to use GenAI with Serverless for identifying Toxicity",
            journal: "Modulate Customer Story",
            date: "2025-08-05",
            url: "",
            authors: [""]
        }
    ],
    
    
    reviewerWork: [
        {
            role: "Technical Reviewer",
            organization: "AWS Compute Blog",
            date: "March 2025",
            description: "Efficient large-scale serverless data processing for slow downstream systems",
            url: "https://aws.amazon.com/blogs/compute/efficient-large-scale-serverless-data-processing-for-slow-downstream-systems/"
        },
    ],
    
    certifications: [
        {
            name: "Datadog AWS Ambassador",
            issuer: "Datadog",
            badgeUrl: "https://www.credly.com/badges/4abce002-b967-45d2-af18-34e9fa5bc1fd",
            badgeImageUrl: "assets/badges/datadog-ambassador.png"
        },
        {
            name: "AWS Certified Developer - Associate",
            issuer: "Amazon Web Services Training and Certification",
            badgeUrl: "https://www.credly.com/badges/95a4727d-e1cd-44f5-92d9-c4c4aa3dd45a/public_url",
            badgeImageUrl: "assets/badges/aws-certified-developer-associate.png"
        },
        {
            name: "AWS Certified Solutions Architect - Associate",
            issuer: "Amazon Web Services Training and Certification",
            badgeUrl: "https://www.credly.com/badges/your-badge-id", // Add your actual Credly URL
            badgeImageUrl: "assets/badges/aws-certified-solutions-architect-associate.png"
        },
        {
            name: "AWS Certified SysOps Administrator - Associate",
            issuer: "Amazon Web Services Training and Certification",
            badgeUrl: "https://www.credly.com/badges/your-badge-id", // Add your actual Credly URL
            badgeImageUrl: "assets/badges/aws-certified-sysops-administrator-associate.png"
        },
        {
            name: "AWS Serverless",
            issuer: "Amazon Web Services",
            badgeUrl: "https://www.credly.com/badges/your-badge-id", // Add your actual Credly URL
            badgeImageUrl: "assets/badges/aws-serverless.png"
        },
        {
            name: "AWS Partner: Cloud Economics Essentials",
            issuer: "Amazon Web Services",
            badgeUrl: "https://www.credly.com/badges/your-badge-id", // Add your actual Credly URL
            badgeImageUrl: "assets/badges/aws-partner-cloud-economics-essentials.png"
        },
    ]
};
