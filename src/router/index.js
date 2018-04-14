import Vue from 'vue'
import App from '../App.vue'


var routes = [{
    path: '/',
    component: App, //顶层路由，对应index.html
    meta: {
        title: '投融资平台'
    },
    redirect: "/home", //默认跳转到在职员工列表
    children: [
        {
            path: 'companyCheck/:companyId',
            name:"companyCheck",
            component: function (resolve) {
                require.ensure([], function () {
                    resolve(require('pages/companyCheck/index.vue'));
                }, 'companyCheck');
            },
            meta: {
                title: "企查查",
                keepAlive: true
            }
        },
        {
            path: 'addMatiral/:companyId',
            name:"addMatiral",
            component: function (resolve) {
                require.ensure([], function () {
                    resolve(require('pages/companyCheck/addMatiral.vue'));
                }, 'addMatiral');
            },
            meta: {
                title: "补充资料",
                keepAlive: true
            }
        },


        {
            path: 'home',
            name:"Home_index",
            component: function (resolve) {
                require.ensure([], function () {
                    resolve(require('pages/home/index.vue'));
                }, 'home_index');
            },
            meta: {
                title: "首页",
                keepAlive: true
            }
        },
        //找资金
        {
            path: 'fund',
            name:"Fund_index",
            component: function (resolve) {
                require.ensure([], function () {
                    resolve(require('pages/fund/index.vue'));
                }, 'fund_index');
            },

            meta: {
                title: "找资金",
                keepAlive: false
            }
        },
        {
            path:"fundOrgDetails/:fundId",
            name:"fundOrgDetails",
            component: function (resolve) {
                require.ensure([], function () {
                    resolve(require('pages/fund/child/fundOrgDetails.vue'));
                }, 'fundOrgDetails_index');
            },
            meta: {
                title: " ",
                keepAlive: false
            }
        },
        {
            path:"fundOrgDetails/:fundId/serverHelp",
            name:"serverHelp",
            component: function (resolve) {
                require.ensure([], function () {
                    resolve(require('pages/fund/child/serverHelp.vue'));
                }, 'fundOrgDetails_index');
            },
            redirect:{name:"orgManagerHelp"},
            children:[
                {
                    path: 'orgManagerHelp',
                    name:"orgManagerHelp",
                    component: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('pages/fund/child/orgManagerHelp.vue'));
                        }, 'orgManagerHelp');
                    },
                    meta: {
                        title: "公司管理",
                        keepAlive: true
                    }
                },
                {
                    path: 'fundServerHelp',
                    name:"fundServerHelp",
                    component: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('pages/fund/child/fundServerHelp.vue'));
                        }, 'fundServerHelp');
                    },
                    meta: {
                        title: "融资服务",
                        keepAlive: true
                    }
                }],
            meta: {
                title: " ",
                keepAlive: false
            }
        },
        //找企业
        {
            path: 'company',
            name:"Company_index",
            component: function (resolve) {
                require.ensure([], function () {
                    resolve(require('pages/company/index.vue'));
                }, 'company_index');
            },
            meta: {
                title: "找企业",
                keepAlive: true
            }
        }
        //找服务
        , {
            path: 'service',
            name: "Service_index",
            component: function (resolve) {
                require.ensure([], function () {
                    resolve(require('pages/server/index.vue'));
                }, 'server_index');
            },
            meta: {
                title: "找服务",
                keepAlive: true
            }
        }
        //政策扶持
        , {
            path: 'policy',
            name:"Policy_index",
            component: function (resolve) {
                require.ensure([], function () {
                    resolve(require('pages/policy/index.vue'));
                }, 'policy_index');
            },
            meta: {
                title: "政策扶持"
            }
        }
        //媒体资讯
        , {
            path: 'media',
            name: "Media_index",
            component: function (resolve) {
                require.ensure([], function () {
                    resolve(require('pages/media/index.vue'));
                }, 'media_index');
            },
            meta: {
                title: "媒体资讯"
            }
        },
        {
            path: 'survey',
            name: "survey",
            component: function (resolve) {
                require.ensure([], function () {
                    resolve(require('pages/survey/index.vue'));
                }, 'media_index');
            },
            meta: {
                title: "媒体资讯"
            }
        },
        //登陆
        {
            path: "/login",
            name: 'Login',
            component: function (resolve) {
                require.ensure([], function () {
                    resolve(require("pages/admin/login.vue"));
                }, "login-index");
            },
            meta: {
                title: "完善员工信息"
            }
        },
        {
            path: "/register",
            name: 'Register',
            component: function (resolve) {
                require.ensure([], function () {
                    resolve(require("pages/admin/Register.vue"));
                }, "login-index");
            },
            meta: {
                title: "完善员工信息"
            }
        },
        {
            path: '/userCenter',
            name: 'userCenter',
             redirect: {name:"userHome"},
            component: function (resolve) {
                require.ensure([], function () {
                    resolve(require("pages/manager/userCenter.vue"));
                }, "user-center");
            },
            children: [
                {
                    path: 'userHome',
                    name:"userHome",
                    component: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('pages/manager/child/userHome.vue'));
                        }, 'userHome');
                    },
                    meta: {
                        title: "个人中心"
                    }
                },
                {
                    path: 'authCheck',
                    name:"authCheck_index",
                    component: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('pages/manager/authorityCheck/index.vue'));
                        }, 'authCheck_index');
                    },
                    meta: {
                        title: "资质审核"
                    }
                },
                {
                    path: 'jointTrade',
                    name:"jointTrade_index",
                    component: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('pages/manager/jointTrade/index.vue'));
                        }, 'jointTrade_index');
                    },
                    redirect:{name:"orgOffer"},
                    children:[
                        {
                            path: 'orgOffer',
                            name:"orgOffer",
                            component: function (resolve) {
                                require.ensure([], function () {
                                    resolve(require('pages/manager/jointTrade/child/orgOffer.vue'));
                                }, 'orgOffer');
                            },
                            meta: {
                                title: "机构邀约"
                            }
                        },
                        {
                            path: 'orgDeliver',
                            name:"orgDeliver",
                            component: function (resolve) {
                                require.ensure([], function () {
                                    resolve(require('pages/manager/jointTrade/child/orgDeliver.vue'));
                                }, 'orgDeliver');
                            },
                            meta: {
                                title: "企业投递"
                            }
                        },
                        {
                            path: 'orgFeedback',
                            name:"orgFeedback",
                            component: function (resolve) {
                                require.ensure([], function () {
                                    resolve(require('pages/manager/jointTrade/child/orgFeedback.vue'));
                                }, 'orgFeedback');
                            },
                            meta: {
                                title: "机构反馈"
                            }
                        },
                        {
                            path: 'materialAdd',
                            name:"materialAdd",
                            component: function (resolve) {
                                require.ensure([], function () {
                                    resolve(require('pages/manager/jointTrade/child/materialAdd.vue'));
                                }, 'materialAdd');
                            },
                            meta: {
                                title: "资料补充"
                            }
                        },
                        {
                            path: 'orgCheck',
                            name:"orgCheck",
                            component: function (resolve) {
                                require.ensure([], function () {
                                    resolve(require('pages/manager/jointTrade/child/orgCheck.vue'));
                                }, 'orgCheck');
                            },
                            meta: {
                                title: "机构审核"
                            }
                        },

                    ],
                    meta: {
                        title: "投融对接"
                    }
                },
                {
                    path: 'jointServer',
                    name:"jointServer_index",
                    component: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('pages/manager/jointServer/index.vue'));
                        }, 'jointServer_index');
                    },
                    redirect:{name:"demandRelease"},
                    children:[
                        {
                            path: 'demandRelease',
                            name:"demandRelease",
                            component: function (resolve) {
                                require.ensure([], function () {
                                    resolve(require('pages/manager/jointServer/child/demandRelease.vue'));
                                }, 'demandRelease');
                            },
                            meta: {
                                title: "需求发布"
                            }
                        },
                        {
                            path: 'orgTender',
                            name:"orgTender",
                            component: function (resolve) {
                                require.ensure([], function () {
                                    resolve(require('pages/manager/jointServer/child/orgTender.vue'));
                                }, 'orgTender');
                            },
                            meta: {
                                title: "机构竞标"
                            }
                        }
                    ],
                    meta: {
                        title: "服务对接"
                    }
                },
                {
                    path: 'plateServer',
                    name:"plateServer_index",
                    component: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('pages/manager/plateServer/index.vue'));
                        }, 'plateServer_index');
                    },
                    meta: {
                        title: "平台服务"
                    }
                },
                {
                    path: 'postMessage',
                    name:"postMessage_index",
                    component: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('pages/manager/postMessage/index.vue'));
                        }, 'plateServer_index');
                    },
                    meta: {
                        title: "信息发布"
                    }
                },
                {
                    path: 'userManager',
                    name:"userManager_index",
                    component: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('pages/manager/userManager/index.vue'));
                        }, 'userManager_index');
                    },
                    meta: {
                        title: "用户管理"
                    }
                },
                {
                    path: 'adManager',
                    name:"adManager_index",
                    component: function (resolve) {
                        require.ensure([], function () {
                            resolve(require('pages/manager/adManager/index.vue'));
                        }, 'adManager_index');
                    },
                    meta: {
                        title: "广告管理"
                    }
                }
            ],

            meta: {
                title: "个人中心"
            }

        },

        {
            path: '*',
            redirect: "/home"
        }

    ]
}]


export default routes;
