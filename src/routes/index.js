import Vue from "vue";
import Router from 'vue-router';
import Layout from '../views/layouts/Layout.vue';
// import Home from "@/views/pages/Home.vue";
import Contact from "@/views/pages/Contact.vue";
import PageNotFound from "@/views/pages/404.vue";
import Economy from "@/views/pages/attraction/economy.vue";

Vue.use(Router);

const router = new Router({
    mode: "history",
    linkExactActiveClass: "menu-active",
    routes: [{
            path: "/",
            component: Layout,
            children: [{
                    path: "",
                    name: "Home",
                    component: Economy
                        // component: Home,
                },
                {
                    path: "contact",
                    name: "Contact",
                    component: Contact,
                },
                {
                    path: "/attraction/economy",
                    name: "Economy",
                    component: () =>
                        import ("@/views/pages/attraction/economy.vue")
                },
                {
                    path: "/attraction/culture",
                    name: "Culture",
                    component: () =>
                        import ("@/views/pages/attraction/culture.vue")
                },
                {
                    path: "/attraction/diversity",
                    name: "Diversity",
                    component: () =>
                        import ("@/views/pages/attraction/diversity.vue")
                },
                {
                    path: "/attraction/environment",
                    name: "Environment",
                    component: () =>
                        import ("@/views/pages/attraction/environment.vue")
                },
                {
                    path: "/attraction/numbers",
                    name: "Numbers",
                    component: () =>
                        import ("@/views/pages/attraction/numbers.vue")
                },

                // Start Crisis

                {
                    path: "/crisis/accident/car",
                    name: "Car",
                    component: () =>
                        import ("@/views/pages/crisis/accident/car.vue")
                },
                {
                    path: "/crisis/accident/bicycles",
                    name: "Bicycles",
                    component: () =>
                        import ("@/views/pages/crisis/accident/bicycles.vue")
                },
                {
                    path: "/crisis/accident/crime",
                    name: "Crime",
                    component: () =>
                        import ("@/views/pages/crisis/accident/crime.vue")
                },
                {
                    path: "/crisis/accident/safety",
                    name: "Safety",
                    component: () =>
                        import ("@/views/pages/crisis/accident/safety.vue")
                },
                {
                    path: "/crisis/earthquake/daily",
                    name: "Daily",
                    component: () =>
                        import ("@/views/pages/crisis/earthquake/daily.vue")
                },
                {
                    path: "/crisis/earthquake/do",
                    name: "Do",
                    component: () =>
                        import ("@/views/pages/crisis/earthquake/do.vue")
                },
                {
                    path: "/crisis/earthquake/evacuate",
                    name: "Evacuate",
                    component: () =>
                        import ("@/views/pages/crisis/earthquake/evacuate.vue")
                },
                {
                    path: "/crisis/earthquake/phone",
                    name: "Phone",
                    component: () =>
                        import ("@/views/pages/crisis/earthquake/phone.vue")
                },
                {
                    path: "/crisis/earthquake/preparation",
                    name: "Preparation",
                    component: () =>
                        import ("@/views/pages/crisis/earthquake/preparation.vue")
                },
                {
                    path: "/crisis/earthquake/strike",
                    name: "Strike",
                    component: () =>
                        import ("@/views/pages/crisis/earthquake/strike.vue")
                },
                {
                    path: "/crisis/fire/case",
                    name: "Case",
                    component: () =>
                        import ("@/views/pages/crisis/fire/case.vue")
                },
                {
                    path: "/crisis/fire/handle",
                    name: "Handle",
                    component: () =>
                        import ("@/views/pages/crisis/fire/handle.vue")
                },
                {
                    path: "/crisis/medical/cold",
                    name: "Cold",
                    component: () =>
                        import ("@/views/pages/crisis/medical/cold.vue")
                },
                {
                    path: "/crisis/medical/sick",
                    name: "Sick",
                    component: () =>
                        import ("@/views/pages/crisis/medical/sick.vue")
                },
                {
                    path: "/crisis/medical/emergency",
                    name: "Emergency",
                    component: () =>
                        import ("@/views/pages/crisis/medical/emergency.vue")
                },
                {
                    path: "/crisis/medical/insurance",
                    name: "Insurance",
                    component: () =>
                        import ("@/views/pages/crisis/medical/insurance.vue")
                },

                // End Crisis

                {
                    path: "/life/cost",
                    name: "Cost",
                    component: () =>
                        import ("@/views/pages/life/cost.vue")
                },
                {
                    path: "/life/insurance",
                    name: "LifeInsurance",
                    component: () =>
                        import ("@/views/pages/life/insurance.vue")
                },
                {
                    path: "/life/residence",
                    name: "Residence",
                    component: () =>
                        import ("@/views/pages/life/residence.vue")
                },
                {
                    path: "/life/study-residence",
                    name: "StudyResidence",
                    component: () =>
                        import ("@/views/pages/life/studyResidence.vue")
                },
                {
                    path: "/life/support",
                    name: "Support",
                    component: () =>
                        import ("@/views/pages/life/support.vue")
                },
                {
                    path: "/plan/style/mext",
                    name: "Mext",
                    component: () =>
                        import ("@/views/pages/plan/chooseStyle/mext.vue")
                },
                {
                    path: "/plan/know/graduate-schools",
                    name: "GraduateSchools",
                    component: () =>
                        import ("@/views/pages/plan/knowSchools/graduateSchools.vue")
                },
                {
                    path: "/plan/know/language-schools",
                    name: "LanguageSchools",
                    component: () =>
                        import ("@/views/pages/plan/knowSchools/languageInstitutes.vue")
                },
                {
                    path: "/plan/know/technology-colleges",
                    name: "TechnologyColleges",
                    component: () =>
                        import ("@/views/pages/plan/knowSchools/technologyColleges.vue")
                },
                {
                    path: "/plan/know/training-colleges",
                    name: "TrainingColleges",
                    component: () =>
                        import ("@/views/pages/plan/knowSchools/trainingColleges.vue")
                },
                {
                    path: "/plan/know/universities",
                    name: "Universities",
                    component: () =>
                        import ("@/views/pages/plan/knowSchools/universities.vue")
                },
                {
                    path: "/plan/style/government",
                    name: "GovernmentSponsor",
                    component: () =>
                        import ("@/views/pages/plan/chooseStyle/mext.vue")
                },
                {
                    path: "/plan/style/government/type",
                    name: "SponsorType",
                    component: () =>
                        import ("@/views/pages/plan/chooseStyle/scholarship/type.vue")
                },
                {
                    path: "/plan/style/government/requirement",
                    name: "SponsorRequirement",
                    component: () =>
                        import ("@/views/pages/plan/chooseStyle/scholarship/requirement.vue")
                },
                {
                    path: "/plan/style/government/application",
                    name: "SponsorApplication",
                    component: () =>
                        import ("@/views/pages/plan/chooseStyle/scholarship/application.vue")
                },
                {
                    path: "/plan/style/private",
                    name: "Private Expense",
                    component: () =>
                        import ("@/views/pages/plan/chooseStyle/private.vue")
                },
                {
                    path: "/plan/style/english-taught",
                    name: "EnglishTaught",
                    component: () =>
                        import ("@/views/pages/plan/chooseStyle/programsEnglish.vue")
                },
                {
                    path: "/plan/style/short-term",
                    name: "ShortTerm",
                    component: () =>
                        import ("@/views/pages/plan/chooseStyle/shortPrograms.vue")
                },
                {
                    path: "/plan/style/transfer",
                    name: "Transfer",
                    component: () =>
                        import ("@/views/pages/plan/chooseStyle/transferPrograms.vue")
                },
                {
                    path: "/plan/chart",
                    name: "Chart",
                    component: () =>
                        import ("@/views/pages/plan/chart.vue")
                },
                {
                    path: "/plan/exams",
                    name: "Exams",
                    component: () =>
                        import ("@/views/pages/plan/exams.vue")
                },
                {
                    path: "/plan/expenses",
                    name: "Expenses",
                    component: () =>
                        import ("@/views/pages/plan/expenses.vue")
                },
                {
                    path: "/plan/immigration",
                    name: "Immigration",
                    component: () =>
                        import ("@/views/pages/plan/immigration.vue")
                },
                {
                    path: "/plan/scholarships",
                    name: "Scholarships",
                    component: () =>
                        import ("@/views/pages/plan/scholarships.vue")
                },
                {
                    path: "/plan/system",
                    name: "System",
                    component: () =>
                        import ("@/views/pages/plan/system.vue")
                },
                {
                    path: "/work/part-time",
                    name: "PartTime",
                    component: () =>
                        import ("@/views/pages/work/partTime.vue"),
                },
                {
                    path: "/work/intern-ship",
                    name: "internShip",
                    component: () =>
                        import ("@/views/pages/work/internShip.vue"),
                },
                {
                    path: "/work/employment",
                    name: "Employment",
                    component: () =>
                        import ("@/views/pages/work/employment.vue"),
                },
                {
                    path: "/work/change-status",
                    name: "ChangeStatus",
                    component: () =>
                        import ("@/views/pages/work/changingStatus.vue"),
                },
            ]
        },
        {
            path: "*",
            name: "PageNotFound",
            component: PageNotFound
        }
    ],
});

export default router;