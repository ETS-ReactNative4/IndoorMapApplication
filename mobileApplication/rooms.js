const mb_G_rooms = ['000','MBG30', 'MBG30A', 'MBG28', 'MBG28A', 'MBG26', 'THE HUB', 'MBG24', 'MBG22', 'MBG22A', 'MBG16', 'Enabling Team', 'MBG14', 'IT', 'HELP', 'HELP DESK', 'IT HELP DESK', 'MBG10A',
    'MBG12', 'MBG10', 'MBG8', 'CAFE TIERRA', 'CAFE', 'COSTA', 'COSTA COFFEE', 'MBG82', 'MBG83', 'MBG80A', 'MBG80', 'CONFERENCE ASTON', 'MBG78', 'MBG76', 'MBG74', 'MBG72', 'MBG54', 'MBG56',
    'MBG52', 'MBG50', 'MBG50A', 'MBG48', 'MBG38E', 'MBG38', 'EXECUTIVE SUITE', 'MBG46A', 'MBG38A', 'MBG38B', 'MBG38C', 'MBG25E', 'MBG25', 'MBG25D', 'MBG25C', 'MBG25B', 'MBG25A',
    'MBG23', 'MBG25G', 'MBG25F', 'MBG21C', 'MBG21B', 'MBG21', 'MBG21A', 'MBG21D', 'MBG19B', 'MBG19A', 'MBG19', 'BANK', 'SARTANDER BANK', 'MBG11', 'MBG7', 'MBG81', 'MBG79', 'MBG77', 'MBG75',
    'MBG73', 'MBG71', 'MBG63', 'MBG60A', 'MBG60B', 'MBG60C', 'MBG60D', 'MBG60E', 'MBG61', 'MBG59', 'MBG57', 'MBG55', 'MBG53', 'COUNCIL ROOM', 'MBG45', 'MBG43', 'MBG41B', 'MBG41', 'MBG41A',
    'MBG39', 'MBG37A', 'MBG37', 'MBG35', 'MBG33', 'MBG31', 'MBG27', 'GREAT HALL', 'THE GREAT HALL', 'HUB'];

const mb_1_rooms = ['000','MB1113A', 'MB136', 'MB134', 'MB132', 'MB130', 'MB128', 'MB126A', 'MB126', 'MB124', 'MB124A', 'MB122', 'MB118', 'MB116', 'MB114', 'MB110H', 'MB110G', 'MB110F', 'MB110E', 'MB110D', 'MB110C', 'MB110B', 'MB110A',
    'MB108', 'MB190', 'MB188', 'MB186', 'MB184E', 'MB184D', 'MB184C', 'MB184B', 'MB184A', 'MB182A', 'MB128B', 'MB180C', 'MB180B', 'MB180A', 'MB178A', 'MB178', 'MB176', 'MB174', 'MB172', 'MB170', 'MB168', 'MB166', 'MB164A', 'MB164',
    'MB160', 'MB158', 'MB156', 'MB154R', 'MB154S', 'MB154Q', 'MB154T', 'MB154', 'MB154P', 'MB154N', 'MB154M', 'MB154L', 'MB154K', 'MB154J', 'MB154H', 'MB154A', 'MB154B', 'MB154C', 'MB154D', 'MB154E', 'MB154F', 'MB154G', 'MB150', 'MB148', 'MB138B',
    'MB138A', 'MB138C', 'MB138B', 'MB143', 'MB144', 'MB139', 'MB142', 'MB137', 'MB140', 'MB133', 'EPS RECEPTION', 'MB129', 'MB129A', 'MB129B', 'MB129C', 'MB127', 'MB125', 'MB127A', 'MB127C', 'MB125A', 'MB123A', 'MB123', 'MB121', 'MB119',
    'MB117', 'MB115', 'MB113', 'MB111', 'MB111A', 'MB111B', 'MB109B', 'MB107', 'MB107A', 'MB189', 'MB185', 'MB183', 'MB163', 'MB161B', 'MB161A', 'MB1133', 'MB159C', 'Model Shop', 'MB159', 'MB159A', 'MB159B', 'MB153', 'MB153J', 'MB153H',
    'MB153G', 'MB153F', 'MB153E', 'MB153D', 'MB153C', 'MB153B', 'MB153A', 'MB151', 'MB149', 'MB147', 'MB135A','MB135'
];

const mb_2_rooms = ['000', 'MB2114A', 'MB211N', 'MB211O', 'MB211M', 'MB211L', 'MB211', 'MB211A', 'MB211B', 'MB211C', 'MB211D', 'MB211E', 'MB211K', 'MB211J', 'MB211H', 'MB211G', 'MB211F', 'MB209', 'MB205', 'MB267',
    'MB265', 'MB265H', 'MB265G', 'MB265F', 'MB265E', 'MB265D', 'MB265C', 'MB265B', 'MB265A', 'MB265L', 'MB265K', 'MB265J', 'MB263', 'MB262', 'MB261', 'MB259A', 'MB257', 'MB255', 'MB255B', 'MB255A',
    'MB251', 'MB249D', 'MB249C', 'MB249B', 'MB249A', 'MB247A', 'MB247', 'MB245', 'MB241', 'MB239', 'MB231', 'MB229', 'MB227', 'MB225', 'MB223', 'MB221', 'MB216', 'MB216A', 'MB216B', 'MB214D', 'MB214E', 'MB214F', 'MB214',
    'MB214G', 'MB214H', 'MB214J', 'MB214K', 'MB214C', 'MB214B', 'MB214A', 'MB214N', 'MB214M', 'MB214L', 'MB212', 'MB208', 'MB210A', 'MB210', 'MB206', 'MB204', 'MB202', 'MB276', 'MB268', 'MB266',
    'MB258', 'MB256', 'MB256A', 'MB256B', 'MB256C', 'MB256D', 'MB256E', 'MB256F', 'MB256G', 'MB254', 'MB252', 'MB250', 'MB248', 'MB242', 'MB226C', 'MB226D', 'MB226B', 'MB226E', 'MB226A', 'MB226F',
    'MB222', 'MB224', 'MB222M', 'MB222L', 'MB222K', 'MB222J', 'MB222H', 'MB222G', 'MB222A', 'MB222B', 'MB222C', 'MB222D', 'MB222E', 'MB222F', 'MB220', 'MB218C', 'MB218B', 'MB218','MB218A'];

const mb_3_rooms = ['000', 'MB3121A', 'MB321', 'MB313N', 'MB313P', 'MB313Q', 'MB313M', 'MB313L', 'MB313K', 'MB313J', 'MB313H', 'MB313G', 'MB313F', 'MB313E', 'MB313A', 'MB313B', 'MB313C', 'MB313D', 'MB311',
    'MB309', 'MB307', 'MB373', 'MB371', 'MB369A', 'MB363A', 'MB363', 'MB361A', 'MB361', 'MB355F', 'MB355G', 'MB355H', 'MB355', 'MB355E', 'MB355D', 'MB355C', 'MB355B', 'MB355A', 'MB351B', 'MB351', 'MB351A', 'MB351C',
    'MB347', 'MB343', 'MB341', 'MB341C', 'MB339A', 'MB339', 'MB337', 'MB331', 'MB329', 'MB329A', 'MB327', 'MB325A', 'MB326', 'MB324', 'MB316', 'MB314C', 'MB314D', 'MB314E', 'MB310J', 'MB314', 'MB314B', 'MB314A',
    'MB310H', 'MB310G', 'MB310F', 'MB310E', 'MB310K', 'MB310L', 'MB310M', 'MB310', 'MB310D', 'MB310C', 'MB310B', 'MB310A', 'MB308', 'MB306', 'MB304', 'MB374', 'MB372', 'MB370', 'MB368', 'MB366',
    'MB364', 'MB362', 'MB360', 'MB358B', 'MB358A', 'MB358C', 'MB358', 'MB358D', 'MB352', 'MB352A', 'MB350', 'MB348', 'MB346C', 'MB346A', 'MB346B', 'MB334B', 'MB334C', 'MB334', 'MB332', 'MB330',
    'MB328A', 'MB328B', 'MB328', 'MB326',
];

const mb_4_rooms = ['000', 'MB418B', 'MB418C', 'MB418', 'MB416', 'MB418A', 'MB407', 'MB405', 'MB486', 'MB482', 'MB480', 'MB478', 'MB476', 'MB464', 'MB464A', 'MB464B', 'MB464C', 'MB464D', 'MB462',
    'MB460D', 'MB460C', 'MB460B', 'MB460A', 'MB460E', 'MB460F', 'MB460G', 'MB440', 'MB438', 'MB438V', 'MB438U', 'MB438T', 'MB438S', 'MB438R', 'MB438Q', 'MB438P', 'MB438N', 'MB438M', 'MB438L',
    'MB438K', 'MB438J', 'MB438H', 'MB438G', 'MB438F', 'MB438A', 'MB438B', 'MB438C', 'MB438D', 'MB438E', 'MB436', 'MB434L', 'MB434', 'MB434Q', 'MB434P', 'MB434N', 'MB434M', 'MB434K', 'MB434J',
    'MB434H', 'MB434H', 'MB434F', 'MB434E', 'MB434D', 'MB434C', 'MB434B', 'MB434A', 'MB432', 'MB430', 'MB419', 'MB417', 'MB411', 'MB413', 'MB408', 'MB406', 'MB404', 'MB402', 'MB479', 'MB477',
    'MB473', 'MB471', 'MB469', 'MB469A', 'MB467A', 'MB467', 'MB463', 'MB461', 'MB459', 'MB459A', 'MB441', 'MB439E', 'MB439F', 'MB439G', 'MB439H', 'MB439J', 'MB439K', 'MB439L', 'MB439D', 'MB439C', 'MB439B', 'MB439A',
    'MB431', 'MB431B','MB431A'
];

const mb_5_rooms = ['000', 'MB524', 'MB522', 'MB522A', 'MB528', 'MB511', 'MB509', 'MB567', 'MB565', 'MB563', 'MB561', 'MB561C', 'MB561B', 'MB561A', 'MB559',
    'MB555A', 'MB557', 'MB555', 'MB553', 'MB551', 'MB549', 'MB548', 'MB548B', 'MB544N', 'MB548A', 'MB544L', 'MB544J', 'MB544G', 'MB544F', 'MB544E', 'MB544D', 'MB544C', 'MB544B', 'MB544A', 'MB541G', 'MB541',
    'MB541F', 'MB541E', 'MB541D', 'MB541C', 'MB541B', 'MB541A', 'MB539A', 'MB539', 'MB536', 'MB534', 'MB532', 'MB530A', 'MB530', 'MB528', 'MB523', 'MB519', 'MB519A',
    'MB517', 'MB512', 'MB510', 'MB508', 'MB506', 'MB504', 'MB502', 'MB576', 'MB574', 'MB568', 'MB566', 'MB564', 'MB560A', 'MB560B', 'MB560C', 'MB560D', 'MB556', 'MB554',
    'MB552','MB550','MB547B','MB547A','MB547','MB545','MB543A','MB543','MB537','MB535','MB533A','MB533','MB531','MB525'
];

const mb_6_rooms = ['000', 'MB677A', 'MB618', 'MB616', 'MB614', 'MB610', 'MB654A', 'MB654', 'MB652C', 'MB652B', 'MB652', 'MB649A', 'MB649', 'MB647', 'MB645', 'MB636G',
    'MB636F', 'MB636E', 'MB636D', 'MB636C', 'MB636B', 'MB636A', 'MB634H', 'MB634G', 'MB634F', 'MB634E', 'MB634D', 'MB634C', 'MB634B', 'MB634A', 'MB626B', 'MB626A', 'MB626',
    'MB624A', 'MB624', 'MB622', 'MB622A', 'MB623C', 'MB621B', 'MB621C', 'MB676', 'MB619', 'MB675', 'MB617', 'MB615', 'MB615A', 'MB613', 'MB613A', 'MB611', 'MB609G',
    'MB609', 'ABS UG OFFICES', 'ABS', 'MB609F', 'MB609E', 'MB609D', 'MB609C', 'MB609B', 'MB609A', 'MB606', 'MB603', 'MB657', 'MB653', 'WRIGHT LECTURE THEATRE', 'WRIGHT LECTURE',
    'MB651', 'SUMPNER LECTURE THEATRE', 'SUMPNER LECTURE', 'SUMPNER', 'WRIGHT', 'MB650', 'MB644', 'MB640B', 'MB640A', 'MB640C', 'MB640', 'MB640D', 'MB640E', 'MB640F', 'MB640G',
    'MB640H', 'MB640I', 'MB691', 'MB640J', 'MB640K', 'MB640L', 'MB640M', 'MB640N', 'MB640P', 'MB637A', 'MB637', 'MB635', 'MB633', 'MB625D', 'MB631', 'MB629', 'MB627', 'MB625',
    'MB625A','MB625B','MB625C','MB621A','MB621B','M621C'
];

const mb_7_rooms = ['000', 'MB721', 'MB717A', 'MB717B', 'MB717C', 'MB715', 'MB711', 'MB717D', 'MB710', 'MB708', 'MB708B', 'MB708A', 'MB709', 'MB709A', 'MB706', 'MB705', 'MB707',
    'MB704', 'MB703', 'MB702', 'MB777', 'MB775', 'MB776', 'MB774', 'MB772', 'MB770', 'MB768', 'MB766', 'MB758', 'MB756', 'MB754', 'MB752', 'MB750', 'MB748', 'MB742B', 'MB742A', 'MB740B',
    'MB740A', 'MB738B', 'MB748A', 'MB738', 'MB736', 'MB734', 'MB732', 'MB732A', 'MB726', 'MB724', 'MB773', 'MB771', 'MB769', 'MB767', 'MB765', 'MB761', 'MB759', 'MB757', 'MB755', 'MB753',
    'MB751', 'MB747', 'MB745', 'MB743', 'MB741', 'MB739', 'MB737', 'MB735A', 'MB735B', 'MB733A', 'MB733B', 'MB731', 'MB729', 'MB727'];

const nw_G_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'NWG02',
        x: 70,
        y: -239,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWG30',
        x: 70,
        y: -239,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWG03',
        x: 88,
        y: -181,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWG04',
        x: 71,
        y: -21,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWG06A',
        x: 50,
        y: 62,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWG06',
        x: 65,
        y: 131,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWG06B',
        x: 72,
        y: 207,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWG08',
        x: 10,
        y: 269,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWG20',
        x: -31,
        y: 206,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWG09',
        x: -55,
        y: 72,
        scale: 2,
        duration: 2000
    },
    {
        name: 'NWG07',
        x: -48,
        y: -125,
        scale: 2,
        duration: 2000
    },
    {
        name: 'NWG24',
        x: -48,
        y: -125,
        scale: 2,
        duration: 2000
    },    
];

const nw_1_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'NW102C',
        x: 84,
        y: -289.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW102A',
        x: 84,
        y: -289.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW102A',
        x: 84,
        y: -245,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW102D',
        x: 84,
        y: -179.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW102',
        x: 84,
        y: -127,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW104',
        x: 84,
        y: 52,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW104A',
        x: 84,
        y: 205,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW104B',
        x: 56,
        y: 300,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW109B',
        x: -56,
        y: 149,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW109',
        x: -53,
        y: -12,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW125',
        x: -53,
        y: -146,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW126',
        x: -53,
        y: -146,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW107',
        x: -24,
        y: -159,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW101C',
        x: -42,
        y: -290,
        scale: 2.5,
        duration: 2000
    },
];

const nw_2_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'FINAL YEAR',
        x: 68,
        y: -221,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'FINAL YEAR PROJECT',
        x: 68,
        y: -221,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'FINAL YEAR PROJECT LAB',
        x: 68,
        y: -221,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW206',
        x: 89,
        y: -123,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW207',
        x: 56,
        y: 311,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW205',
        x: -57,
        y: -112,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW223',
        x: -52,
        y: -162,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW224',
        x: -52,
        y: -162,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW225',
        x: -17,
        y: -117,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW203',
        x: -83,
        y: -257,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW203A',
        x: -90,
        y: -307,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW201',
        x: -34,
        y: -332,
        scale: 2.5,
        duration: 2000
    },    
];

const nw_3_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'NW302',
        x: 64,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW302A',
        x: 68,
        y: -203.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW304A',
        x: 71,
        y: -136,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW304b',
        x: 71,
        y: -136,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW306',
        x: 68,
        y: -50,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW308',
        x: 68,
        y: -50,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW310',
        x: 68,
        y: 11,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW312',
        x: 68,
        y: 11,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW316',
        x: 72,
        y: 91,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW318',
        x: 70,
        y: 165,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW320',
        x: 70,
        y: 165,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW322',
        x: 70,
        y: 225,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW324',
        x: 58,
        y: 291,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW324A',
        x: 76,
        y: 323,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW324B',
        x: 16,
        y: 323,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW317',
        x: -52,
        y: 151,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW315',
        x: -52,
        y: 151,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW313',
        x: -52,
        y: 55,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW311',
        x: -52,
        y: 55,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW309',
        x: -52,
        y: -62,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW332',
        x: -52,
        y: -160,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW303',
        x: -76,
        y: -263,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW303A',
        x: -84,
        y: -323,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW301',
        x: -24,
        y: -320,
        scale: 2.5,
        duration: 2000
    },
];

const nw_4_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'NW402',
        x: 68,
        y: -191,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW404',
        x: 60,
        y: -46,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW406C',
        x: 84.5,
        y: 8,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW406B',
        x: 38.5,
        y: -15,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW406A',
        x: 11,
        y: -6,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW406',
        x: 53,
        y: 203,
        scale: 1.5,
        duration: 2000
    },
    {
        name: 'NW425',
        x: -65,
        y: 148,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW423',
        x: -65,
        y: 148,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW421',
        x: -65,
        y: 89,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW419',
        x: -65,
        y: 89,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW417',
        x: -65,
        y: 13,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW415',
        x: -65,
        y: 13,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW413',
        x: -65,
        y: 64,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW411',
        x: -65,
        y: 64,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW409',
        x: -57,
        y: -139,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW433',
        x: -57,
        y: -139,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW434',
        x: -53,
        y: -166,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW403',
        x: -78,
        y: -266,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW401',
        x: -54,
        y: -322,
        scale: 2.5,
        duration: 2000
    },
];

const nw_5_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'NW502',
        x: 68,
        y: -195,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW504A',
        x: 52,
        y: -78,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW504',
        x: 52,
        y: -6,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW508A',
        x: 77,
        y: 75,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW506',
        x: 24,
        y: 79,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW508',
        x: 51,
        y: 236,
        scale: 1.9,
        duration: 2000
    },
    {
        name: 'NW527',
        x: -71,
        y: 139,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW525',
        x: -71,
        y: 139,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW523',
        x: -70,
        y: 62,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW521',
        x: -70,
        y: 62,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW519',
        x: -68,
        y: -12,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW517',
        x: -68,
        y: -12,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW515',
        x: -61,
        y: -77,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW513',
        x: -61,
        y: -77,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW511',
        x: -56,
        y: -142,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW532',
        x: -56,
        y: -142,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW533',
        x: -45,
        y: -177,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW505',
        x: -69,
        y: -310,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW503',
        x: -13,
        y: -323,
        scale: 2.5,
        duration: 2000
    },
];

const nw_6_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'NW602',
        x: 67,
        y: -309,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW604',
        x: 67,
        y: -223,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW606',
        x: 67,
        y: -110,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW609',
        x: 67,
        y: -31.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW608D',
        x: 20,
        y: 54.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW608A',
        x: 58,
        y: 107,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW608C',
        x: 88,
        y: 167,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW608B',
        x: 47,
        y: 162,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW610',
        x: 87,
        y: 236,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW612',
        x: 84,
        y: 295,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW614',
        x:54,
        y: 323,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW616',
        x: 21,
        y: 265,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW618',
        x: 21,
        y: 265,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW621',
        x: -72,
        y: 113,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW619',
        x: -72,
        y: 113,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW617',
        x: -72,
        y: 113,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW615A',
        x: -72,
        y: 30,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW615',
        x: -72,
        y: 30,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW613',
        x: -72,
        y: -51,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW611',
        x: -72,
        y: -51,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW609',
        x: -63,
        y: -135,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW629',
        x: -61,
        y: -146,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW630',
        x: -55,
        y: -164,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW601',
        x: -57,
        y: 282,
        scale: 2.5,
        duration: 2000
    },
];

const nw_7_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'NW702',
        x: 64,
        y: -271,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW704',
        x: 64,
        y: -271,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW706',
        x: 66,
        y: -197,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW708',
        x: 71,
        y: -105,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW710',
        x: 73,
        y: -17,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW712',
        x: 62,
        y: 154,
        scale: 1.8,
        duration: 0
    },
    {
        name: 'NW714',
        x: 60,
        y: 323,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW714A',
        x: 32,
        y: 323,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW715',
        x: -69,
        y: 123,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW713',
        x: -71,
        y: 27,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW711',
        x: -71,
        y: 27,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW709',
        x: -67,
        y: -68,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW707A',
        x: -67,
        y: -68,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW703',
        x: -67,
        y: -1119,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW722',
        x: -63,
        y: -146,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW723',
        x: -63,
        y: -146,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW701A',
        x: -62,
        y: -250,
        scale: 2.5,
        duration: 0
    },
    {
        name: 'NW701',
        x: -52,
        y: -320,
        scale: 2.5,
        duration: 0
    },
];

const nw_8_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'NW802A',
        x: 63,
        y: -300,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW802',
        x: 63,
        y: -227,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW802C',
        x: 63,
        y: -227,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW802D',
        x: 63,
        y: -149,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW804',
        x: 63,
        y: -149,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW806',
        x: 63,
        y: -53,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW808',
        x: 63,
        y: -53,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW810',
        x: 63,
        y: -9,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW812',
        x: 63,
        y: 30,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW814',
        x: 63,
        y: 50,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW816',
        x: 63,
        y: 87,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW816A',
        x: 63,
        y: 140,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW818',
        x: 63,
        y: 178,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW820A',
        x: 100,
        y: 202,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW820B',
        x: 100,
        y: 265,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW820C',
        x: 100,
        y: 265,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW820D',
        x: 100,
        y: 320,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW820E',
        x: 100,
        y: 320,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW820F',
        x: 23,
        y: 320,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW820G',
        x: 23,
        y: 320,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW820H',
        x: 23,
        y: 262,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW820J',
        x: 23,
        y: 262,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW811',
        x: -30,
        y: 167,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW809C',
        x: -65,
        y: 156,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW809B',
        x: -74,
        y: 112,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW809A',
        x: -74,
        y: 112,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW809',
        x: -27,
        y: 114,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW807',
        x: -51,
        y: 52,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW805',
        x: -51,
        y: -73,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW859',
        x: -49,
        y: -166,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW858',
        x: -49,
        y: -166,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW803',
        x: -80,
        y: -284,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW803A',
        x: -90,
        y: 323,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW801',
        x: -36,
        y: 323,
        scale: 2.5,
        duration: 2000
    },
];

const nw_9_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'NW902',
        x: 68,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW904',
        x: 68,
        y: -194,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW906',
        x: 68,
        y: -194,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW908',
        x: 80,
        y: -132,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW910',
        x: 80,
        y: -132,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW912',
        x: 80,
        y: -65,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW914',
        x: 80,
        y: -65,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW914A',
        x: 80,
        y: 5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW916',
        x: 80,
        y: 5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW918',
        x: 66,
        y: 80,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW918A',
        x: 66,
        y: 80,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW920',
        x: 62,
        y: 147,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW920A',
        x: 62,
        y: 147,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW922A',
        x: 64,
        y: 211,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW922B',
        x: 94,
        y: 256,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW922C',
        x: 94,
        y: 256,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW922D',
        x: 92,
        y: 323,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW922E',
        x: 92,
        y: 323,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW922F',
        x: 20,
        y: 323,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW922G',
        x: 20,
        y: 292,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW922H',
        x: 20,
        y: 292,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW923',
        x: -55,
        y: 143,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW921',
        x: -55,
        y: 143,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW919',
        x: -55,
        y: 84,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW917',
        x: -55,
        y: 53,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW915',
        x: -71,
        y: 2,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW913A',
        x: -71,
        y: 2,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW913',
        x: -71,
        y: -45,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW911',
        x: -71,
        y: -102,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW959',
        x: -61,
        y: -161,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW905',
        x: -77,
        y: -268,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW903',
        x: -84,
        y: -322,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NW901',
        x: -37,
        y: -322,
        scale: 2.5,
        duration: 2000
    },
];

const nw_10_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'NWX02',
        x: 66,
        y: -254,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX04A',
        x: 38,
        y: -198,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX04',
        x: 63,
        y: -177,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX06A',
        x: 66,
        y: -73,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX06B',
        x: 69,
        y: 82,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX08',
        x: 69,
        y: 170,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX10',
        x: 69,
        y: 170,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX12',
        x: 69,
        y: 206,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX14',
        x: 39,
        y: 213,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX16',
        x: 54,
        y: 297,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX17',
        x: -56,
        y: 135,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX15',
        x: -54,
        y: 64,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX13',
        x: -51,
        y: 4,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX11',
        x: -51,
        y: -72,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX09',
        x: -51,
        y: -138,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX57',
        x: -51,
        y: -138,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX56',
        x: -51,
        y: -138,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX03',
        x: -78,
        y: -253,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX01A',
        x: -83,
        y: -299,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'NWX01',
        x: -33,
        y: -323,
        scale: 2.5,
        duration: 2000
    },
];

const sw_G_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
}, {
        name: 'SWG07',
        x: 13.5,
        y: 93,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWG23A',
        x: -1.5,
        y: -131.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWG23B',
        x: -1.5,
        y: -131.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWG23',
        x: 31,
        y: -199,
        scale: 2.1,
        duration: 2000
    },
    {
        name: 'SWG26',
        x: 8.1,
        y: -254,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWG26A',
        x: 8.1,
        y: -254,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWG28',
        x: 140,
        y: -261,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWG29',
        x: 181,
        y: -197.5,
        scale: 1.65,
        duration: 2000
    },
    {
        name: 'SWG30',
        x: 187,
        y: 86.75,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWG12',
        x: 145.5,
        y: 107.25,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'MAIN RECEPTION',
        x: 11.2,
        y: 162.2,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'ENTRANCE',
        x: -130,
        y: 173,
        scale: 1.25,
        duration: 2000
    },
    {
        name: 'MAIN ENTRANCE',
        x: -130,
        y: 173,
        scale: 1.25,
        duration: 2000
    },
];

const sw_1_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'SW103',
        x: 8.5,
        y: 79,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW105',
        x: 8.5,
        y: 79,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW107',
        x: 12,
        y: 2.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW111',
        x: -10,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW120',
        x: 191,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW118',
        x: 191,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW116',
        x: 191,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW114',
        x: 191,
        y: -240,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW112',
        x: 191,
        y: -160,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW110',
        x: 191,
        y: -160,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW109A',
        x: 191,
        y: -80,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW108',
        x: 191,
        y: -18,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW106',
        x: 191,
        y: 79.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW106A',
        x: 191,
        y: 79.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW138',
        x: 191,
        y: 79.5,
        scale: 2.5,
        duration: 2000
    },
];

const sw_2_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
}, {
        name: 'SW207',
        x: 12.5,
        y: 95,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW211',
        x: 12.5,
        y: -7.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW213',
        x: 12.5,
        y: -73.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW214',
        x: 12.5,
        y: -204.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'DIGITAL MARKET',
        x: 12.5,
        y: -204.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'DIGITAL MARKETING',
        x: 12.5,
        y: -204.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'DIGITAL MARKETING',
        x: 12.5,
        y: -204.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'PR',
        x: 167,
        y: -235,
        scale: 1.9,
        duration: 2000
    },
    {
        name: 'PR, GRAPHIC DESIGN',
        x: 167,
        y: -235,
        scale: 1.9,
        duration: 2000
    },
    {
        name: 'PR, GRAPHIC DESIGN, PUBLICATIONS AND EVENTS',
        x: 167,
        y: -235,
        scale: 1.9,
        duration: 2000
    },
    {
        name: 'GRAPHIC DESIGN',
        x: 167,
        y: -235,
        scale: 1.9,
        duration: 2000
    },
    {
        name: 'PUBLICATIONS AND EVENTS',
        x: 167,
        y: -235,
        scale: 1.9,
        duration: 2000
    },
    {
        name: 'S212',
        x: 167,
        y: -235,
        scale: 1.9,
        duration: 2000
    },
    {
        name: 'S210',
        x: 167,
        y: -65,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'INTERNATIONAL',
        x: 167,
        y: -65,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'INTERNATIONAL OFFICE',
        x: 167,
        y: -65,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SCHOOLS AND LIASION',
        x: 167,
        y: 39.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'LIASION',
        x: 167,
        y: 39.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW208',
        x: 167,
        y: 39.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'MARKET RESEARCH',
        x: 167,
        y: 50,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW206C',
        x: 128,
        y: 83.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW226',
        x: 146,
        y: 215.5,
        scale: 2.5,
        duration: 2000
    },
];

const sw_3_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'SW305',
        x: 12,
        y: 104.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW305A',
        x: 0,
        y: -10,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW309',
        x: 10,
        y: -131,
        scale: 2,
        duration: 2000
    },
    {
        name: 'SW309A',
        x: -7.7,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW312G',
        x: 145,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW310',
        x: 166,
        y: -252,
        scale: 2.2,
        duration: 2000
    },
    {
        name: 'SW312B',
        x: 207,
        y: -125,
        scale: 2.2,
        duration: 2000
    },
    {
        name: 'SW312D',
        x: 129.5,
        y: -125,
        scale: 2.2,
        duration: 2000
    },
    {
        name: 'SW308',
        x: 164.5,
        y: -57,
        scale: 2.2,
        duration: 2000
    },
    {
        name: 'SW304A',
        x: 163.5,
        y: 46,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW304A',
        x: 163.5,
        y: 46,
        scale: 2.5,
        duration: 2000
    },
];

const sw_4_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'SW405',
        x: 14.5,
        y: 161,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW405',
        x: 14.5,
        y: 161,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW407',
        x: 14.5,
        y: 131,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW407A',
        x: 14.5,
        y: 66,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW409',
        x: 14.5,
        y: 13.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW409A',
        x: 14.5,
        y: 13.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW411',
        x: 14.5,
        y: -30,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW413',
        x: 14.5,
        y: -79.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW414A',
        x: 14.5,
        y: -79.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW415',
        x: 14.5,
        y: -138,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW417',
        x: 14.5,
        y: -175,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW419',
        x: 14.5,
        y: -244,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW414A',
        x: 125,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW414',
        x: 167,
        y: -262,
        scale: 2.2,
        duration: 2000
    },
    {
        name: 'SW414B',
        x: 207,
        y: -280,
        scale: 2.2,
        duration: 2000
    },
    {
        name: 'SW414C',
        x: 189,
        y: -251,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW410D',
        x: 203,
        y: -165,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW410C',
        x: 203,
        y: -165,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW410B',
        x: 131,
        y: -165,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW410A',
        x: 131,
        y: -165,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW410H',
        x: 131,
        y: -75,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW410G',
        x: 131,
        y: -75,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW410F',
        x: 203,
        y: -75,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW410E',
        x: 203,
        y: -75,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW408',
        x: 165.5,
        y: 33,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW408A',
        x: 191,
        y: 82,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW406',
        x: 126.5,
        y: 75.5,
        scale: 2.5,
        duration: 2000
    },
];

const sw_5_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'SW505',
        x: 11,
        y: 110,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW507C',
        x: -10,
        y: 34.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW507B',
        x: -10,
        y: 34.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW507A',
        x: 13,
        y: -31.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW509A',
        x: 7,
        y: -99.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW509B',
        x: 7,
        y: -99.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW509C',
        x: 15,
        y: -190,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW511',
        x: 15,
        y: -190,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW511A',
        x: 15,
        y: -268,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW510C',
        x: 135,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW510D',
        x: 178.5,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW510E',
        x: 209,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW510B',
        x: 173.5,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW510A',
        x: 183.5,
        y: -255,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW510',
        x: 125.5,
        y: -261,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW508D',
        x: 165,
        y: -206,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW508H',
        x: 165,
        y: -206,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW508B',
        x: 165,
        y: -155,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW508G',
        x: 165,
        y: -155,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW508A',
        x: 165,
        y: -90,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW508F',
        x: 165,
        y: -90,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW508',
        x: 165,
        y: -90,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW508E',
        x: 165,
        y: -90,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW506A',
        x: 165,
        y: -10,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW506B',
        x: 165,
        y: -10,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW506',
        x: 165,
        y: 75,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW504',
        x: 112,
        y: 120,
        scale: 2.5,
        duration: 2000
    },
]

const sw_6_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'SW603',
        x: 10,
        y: 163.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW605A',
        x: 10,
        y: 163.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW605',
        x: 10,
        y: 123.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW607',
        x: 10,
        y: 78,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW609',
        x: 10,
        y: 78,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW609B',
        x: 10,
        y: -13.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW609C',
        x: 10,
        y: -13.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW611',
        x: 10,
        y: -90,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW613',
        x: 10,
        y: -90,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW615C',
        x: 10,
        y: -195,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW615A',
        x: 10,
        y: -195,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW615B',
        x: 10,
        y: -275,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW620C',
        x: 130,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW620B',
        x: 191,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW620A',
        x: 191,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW618',
        x: 164,
        y: -192,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW616',
        x: 164,
        y: -192,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW614',
        x: 164,
        y: -121,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW612A',
        x: 164,
        y: -106,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW612',
        x: 120,
        y: -100,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW610A',
        x: 165,
        y: -15,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW610B',
        x: 172,
        y: 66,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW608',
        x: 162,
        y: 83,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW604',
        x: 114,
        y: 115,
        scale: 2.5,
        duration: 2000
    },
];

const sw_7_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'SW701',
        x: 14.5,
        y: 125,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW703',
        x: 14.5,
        y: 125,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW705',
        x: 14.5,
        y: 29,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW707',
        x: 14.5,
        y: 29,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW709',
        x: 14.5,
        y: -64,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW711',
        x: 14.5,
        y: -64,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW713',
        x: 14.5,
        y: -176,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW715',
        x: 14.5,
        y: -176,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW717',
        x: 5.5,
        y: -258,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW719',
        x: 5.5,
        y: -258,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW724',
        x: 175,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW722',
        x: 175,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW720',
        x: 175,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW716',
        x: 165,
        y: -187,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW714',
        x: 165,
        y: -187,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW712',
        x: 165,
        y: -122,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW710',
        x: 165,
        y: -122,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW708',
        x: 165,
        y: -25,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW706',
        x: 165,
        y: -25,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW704',
        x: 165,
        y: 58,
        scale: 2.5,
        duration: 2000
    },
];

const sw_8_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'SW802',
        x: 10,
        y: 117,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW802A',
        x: 10,
        y: 117,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW804',
        x: 10,
        y: 12.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW805',
        x: 10,
        y: -69,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW807',
        x: 10,
        y: -145,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW808',
        x: 52,
        y: -155,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW809',
        x: -4,
        y: -196,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW810',
        x: 45,
        y: -224,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW811',
        x: -3,
        y: -265,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW812',
        x: 9,
        y: -281,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW813',
        x: 176,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW814',
        x: 199,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW815',
        x: 199,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW816',
        x: 199,
        y: -200,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW817',
        x: 199,
        y: -200,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW818',
        x: 199,
        y: -102,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW819',
        x: 199,
        y: -102,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW820',
        x: 199,
        y: -18,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW821',
        x: 199,
        y: -18,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW823',
        x: 199,
        y: -66,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW840',
        x: 124,
        y: -6,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW841',
        x: 124,
        y: -6,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW842',
        x: 124,
        y: -168,
        scale: 2.5,
        duration: 2000
    },
];

const sw_9_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'SW905A',
        x: 14,
        y: 145,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW905B',
        x: 7,
        y: 94.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW907A',
        x: 14,
        y: 35.2,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW907B',
        x: 14,
        y: -40.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW909',
        x: 14,
        y: -40.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW911A',
        x: 14,
        y: -143.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW911B',
        x: 14,
        y: -143.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW911C',
        x: 14,
        y: -242.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW911D',
        x: 14,
        y: -242.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW920C',
        x: 120,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW920B',
        x: 170,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW920',
        x: 170,
        y: -253,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW918A',
        x: 123,
        y: -182,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW918',
        x: 196,
        y: -183,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW916',
        x: 168,
        y: -114,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW914',
        x: 168,
        y: -114,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW912',
        x: 168,
        y: -29.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW910',
        x: 168,
        y: -29.5,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW908',
        x: 168,
        y: 55,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SW906',
        x: 168,
        y: 55,
        scale: 2.5,
        duration: 2000
    },
];

const sw_10_rooms =  [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'SWX05',
        x: 8.6,
        y: 130,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX07',
        x: 8.6,
        y: 130,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX09',
        x: 8.6,
        y: 57,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX11',
        x: 8.6,
        y: 57,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX13',
        x: 8.6,
        y: -36,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX13B',
        x: 8.6,
        y: -36,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX15',
        x: 8.6,
        y: -113,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX17',
        x: 8.6,
        y: -113,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX19',
        x: 8.6,
        y: -205,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX21',
        x: 8.6,
        y: -205,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX23',
        x: 8.6,
        y: -275,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX20C',
        x: 187.5,
        y: -278,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX20B',
        x: 187.5,
        y: -278,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX20A',
        x: 187.5,
        y: -233,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX16',
        x: 164,
        y: -148,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX18',
        x: 164,
        y: -148,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX14',
        x: 164,
        y: -61,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX12',
        x: 164,
        y: -61,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX10',
        x: 164,
        y: 39,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWX08',
        x: 164,
        y: 39,
        scale: 2.5,
        duration: 2000
    },
];

const sw_11_rooms = [{
    name: '000',
    x: 0,
    y: 0,
    scale: 1,
    duration: 0
},
    {
        name: 'SWE27',
        x: 15,
        y: 109,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWE25',
        x: 15,
        y: 109,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWE26',
        x: 15,
        y: 109,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWE09',
        x: 15,
        y: -30,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWE08',
        x: 12,
        y: -153,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWE07',
        x: 12,
        y: -222,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWE06',
        x: 12,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWE05',
        x: 42,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWE04',
        x: 175,
        y: -280,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWE14',
        x: 128,
        y: -190,
        scale: 1.6,
        duration: 2000
    },
    {
        name: 'SWE03',
        x: 195,
        y: -104,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWE02',
        x: 200,
        y: -38,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWE01',
        x: 200,
        y: 34,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWE10',
        x: 170,
        y: 90,
        scale: 2.3,
        duration: 2000
    },
    {
        name: 'SWE24',
        x: 152,
        y: 131,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWE23',
        x: 148,
        y: 198,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWE10B',
        x: 209.5,
        y: 188,
        scale: 2.5,
        duration: 2000
    },
    {
        name: 'SWE10C',
        x: 209.5,
        y: 188,
        scale: 2.5,
        duration: 2000
    },
];

export {
    mb_G_rooms, mb_1_rooms, mb_2_rooms, mb_3_rooms, mb_4_rooms, mb_5_rooms, mb_6_rooms, mb_7_rooms,
    nw_G_rooms, nw_1_rooms, nw_2_rooms, nw_3_rooms, nw_4_rooms, nw_5_rooms, nw_6_rooms, nw_7_rooms, nw_8_rooms, nw_9_rooms, nw_10_rooms,
    sw_G_rooms, sw_1_rooms, sw_2_rooms, sw_3_rooms, sw_4_rooms, sw_5_rooms, sw_6_rooms, sw_7_rooms, sw_8_rooms, sw_9_rooms, sw_10_rooms, sw_11_rooms
};

