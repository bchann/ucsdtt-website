/** Add Brothers in order of class and roll # **/
const brothers = [
  //Kappa
  {
    name: 'Amanda Bang',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2016',
    image: require('./images/brothers/portraits/114_abang.webp'),
    safari: require('./images/brothers/portraits/114_abang.jpg')
  },
  {
    name: 'Peter Neal Barrina',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2016',
    image: require('./images/brothers/portraits/115_pbarrina.webp'),
    safari: require('./images/brothers/portraits/115_pbarrina.jpg')
  },
  {
    name: 'Claude-Henry Djongoue',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'aero',
    majorName: 'Aerospace Engineering',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/116_cdjongoue.webp'),
    safari: require('./images/brothers/portraits/116_cdjongoue.jpg')
  },
  {
    name: 'Conway Hsieh',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/117_chsieh.webp'),
    safari: require('./images/brothers/portraits/117_chsieh.jpg')
  },
  {
    name: 'Jaehee Jung',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2018',
    image: require('./images/brothers/portraits/118_jjung.webp'),
    safari: require('./images/brothers/portraits/118_jjung.jpg')
  },
  {
    name: 'Kevin Ngo',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/119_kngo.webp'),
    safari: require('./images/brothers/portraits/119_kngo.jpg')
  },
  {
    name: 'Olivia Tran',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2016',
    image: require('./images/brothers/portraits/120_otran.webp'),
    safari: require('./images/brothers/portraits/120_otran.jpg')
  },
  {
    name: 'Richard Yuan',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2016',
    image: require('./images/brothers/portraits/121_ryuan.webp'),
    safari: require('./images/brothers/portraits/121_ryuan.jpg')
  },
  {
    name: 'Kyle Zhu',
    position: 'Alumni',
    class: 'kappa',
    className: 'Kappa Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/122_kzhu.webp'),
    safari: require('./images/brothers/portraits/122_kzhu.jpg')
  },
  //Lambda
  // {
  //   'name': 'Yusef Abouremeleh',
  //   'position': 'Alumni',
  //   'class': 'lambda',
  //   'className': 'Lambda Class',
  //   'major': 'bio',
  //   'majorName': 'Bioengineering',
  //   'year': 'Class of 2016',
  //   'image': require('./images/brothers/portraits/123_yabouremeleh.webp'),
  //   'safari': require('./images/brothers/portraits/123_yabouremeleh.jpg'),
  // },
  {
    name: 'David Deng',
    position: 'Alumni',
    class: 'lambda',
    className: 'Lambda Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/124_ddeng.webp'),
    safari: require('./images/brothers/portraits/124_ddeng.jpg')
  },
  // {
  //   'name': 'Alex Fields',
  //   'position': 'Alumni',
  //   'class': 'lambda',
  //   'className': 'Lambda Class',
  //   'major': 'other',
  //   'majorName': 'Physics',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/125_afields.webp'),
  //   'safari': require('./images/brothers/portraits/125_afields.jpg'),
  // },
  // {
  //   'name': 'Christian Gutierrez',
  //   'position': 'Alumni',
  //   'class': 'lambda',
  //   'className': 'Lambda Class',
  //   'major': 'cs',
  //   'majorName': 'Computer Science',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/126_cgutierrez.webp'),
  //   'safari': require('./images/brothers/portraits/126_cgutierrez.jpg'),
  // },
  {
    name: 'Blake Huynh',
    position: 'Alumni',
    class: 'lambda',
    className: 'Lambda Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2017',
    linkedin: 'https://www.linkedin.com/in/bhhuynh/',
    image: require('./images/brothers/portraits/127_bhuynh.webp'),
    safari: require('./images/brothers/portraits/127_bhuynh.jpg')
  },
  {
    name: 'Kaiser Kim',
    position: 'Alumni',
    class: 'lambda',
    className: 'Lambda Class',
    major: 'ce',
    majorName: 'Computer Engineering',
    year: 'Class of 2017',
    linkedin: 'www.linkedin.com/in/kaiserkim/',
    image: require('./images/brothers/portraits/128_kkim.webp'),
    safari: require('./images/brothers/portraits/128_kkim.jpg')
  },
  {
    name: 'Claire Li',
    position: 'Alumni',
    class: 'lambda',
    className: 'Lambda Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/claireli100/',
    image: require('./images/brothers/portraits/129_cli.webp'),
    safari: require('./images/brothers/portraits/129_cli.jpg')
  },
  {
    name: 'Wendy Lin',
    position: 'Alumni',
    class: 'lambda',
    className: 'Lambda Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2017',
    linkedin: 'https://www.linkedin.com/in/wendy-lin-80489bbb/',
    image: require('./images/brothers/portraits/130_wlin.webp'),
    safari: require('./images/brothers/portraits/130_wlin.jpg')
  },
  // {
  //   'name': 'Teddy Tea',
  //   'position': 'Alumni',
  //   'class': 'lambda',
  //   'className': 'Lambda Class',
  //   'major': 'aero',
  //   'majorName': 'Aerospace Engineering',
  //   'year': 'Class of 2016',
  //   'image': require('./images/brothers/portraits/131_ttea.webp'),
  //   'safari': require('./images/brothers/portraits/131_ttea.jpg'),
  // },
  // {
  //   'name': 'Natalie Tiwapong',
  //   'position': 'Alumni',
  //   'class': 'lambda',
  //   'className': 'Lambda Class',
  //   'major': 'cs',
  //   'majorName': 'Computer Science',
  //   'year': 'Class of 2016',
  //   'image': require('./images/brothers/portraits/132_ntiwapong.webp'),
  //   'safari': require('./images/brothers/portraits/132_ntiwapong.jpg'),
  // },
  {
    name: 'Alex Tunchez',
    position: 'Alumni',
    class: 'lambda',
    className: 'Lambda Class',
    major: 'aero',
    majorName: 'Aerospace Engineering',
    year: 'Class of 2017',
    linkedin: 'https://www.linkedin.com/in/alex-tunchez-0a2ba5127/',
    image: require('./images/brothers/portraits/133_atunchez.webp'),
    safari: require('./images/brothers/portraits/133_atunchez.jpg')
  },
  // {
  //   'name': 'Eunice Wong',
  //   'position': 'Alumni',
  //   'class': 'lambda',
  //   'className': 'Lambda Class',
  //   'major': 'cs',
  //   'majorName': 'Computer Science',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/134_ewong.webp'),
  //   'safari': require('./images/brothers/portraits/134_ewong.jpg'),
  // },
  // {
  //   'name': 'Jesse Zhou',
  //   'position': 'Alumni',
  //   'class': 'lambda',
  //   'className': 'Lambda Class',
  //   'major': 'cs',
  //   'majorName': 'Computer Science',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/135_jzhou.webp'),
  //   'safari': require('./images/brothers/portraits/135_jzhou.jpg'),
  // },
  //Mu
  //  {
  //   'name': 'Randel Emens',
  //   'position': 'Alumni',
  //   'class': 'mu',
  //   'className': 'Mu Class',
  //   'major': 'struct',
  //   'majorName': 'Structural Engineering',
  //   'year': 'Class of 2016',
  //   'image': require('./images/brothers/portraits/136_remens.webp'),
  //   'safari': require('./images/brothers/portraits/136_remens.jpg'),
  // },
  // {
  //   'name': 'Melissa Gomez',
  //   'position': 'Alumni',
  //   'class': 'mu',
  //   'className': 'Mu Class',
  //   'major': 'struct',
  //   'majorName': 'Structural Engineering',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/137_mgomez.webp'),
  //   'safari': require('./images/brothers/portraits/137_mgomez.jpg'),
  // },
  // {
  //   'name': 'Edward Gunawan',
  //   'position': 'Alumni',
  //   'class': 'mu',
  //   'className': 'Mu Class',
  //   'major': 'cs',
  //   'majorName': 'Computer Science',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/138_egunawan.webp'),
  //   'safari': require('./images/brothers/portraits/138_egunawan.jpg'),
  // },
  {
    name: 'Chelsea Jan',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2017',
    linkedin: 'https://www.linkedin.com/in/chelseajan/',
    image: require('./images/brothers/portraits/139_cjan.webp'),
    safari: require('./images/brothers/portraits/139_cjan.jpg')
  },
  {
    name: 'Ming Ming Liu',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/kellieliu/',
    image: require('./images/brothers/portraits/140_mliu.webp'),
    safari: require('./images/brothers/portraits/140_mliu.jpg')
  },
  {
    name: 'Crystal Munive',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'aero',
    majorName: 'Aerospace Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/crystal-munive-b01204149/',
    image: require('./images/brothers/portraits/141_cmunive.webp'),
    safari: require('./images/brothers/portraits/141_cmunive.jpg')
  },
  {
    name: 'Vinesh Nathan',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/142_vnathan.webp'),
    safari: require('./images/brothers/portraits/142_vnathan.jpg')
  },
  {
    name: 'Daviid Perez',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/david-perez-aguilar-01400aba/',
    image: require('./images/brothers/portraits/143_dperez.webp'),
    safari: require('./images/brothers/portraits/143_dperez.jpg')
  },
  {
    name: 'Jessica Tran',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/jessicantran/',
    image: require('./images/brothers/portraits/144_jtran.webp'),
    safari: require('./images/brothers/portraits/144_jtran.jpg')
  },
  {
    name: 'Terri Tsai',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2017',
    linkedin: 'https://www.linkedin.com/in/terri-tsai-79a857114/',
    image: require('./images/brothers/portraits/145_ttsai.webp'),
    safari: require('./images/brothers/portraits/145_ttsai.jpg')
  },
  {
    name: 'Michael Wang',
    position: 'Alumni',
    class: 'mu',
    className: 'Mu Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/michael-wang-99428147/',
    image: require('./images/brothers/portraits/146_mwang.webp'),
    safari: require('./images/brothers/portraits/146_mwang.jpg')
  },
  // {
  //   'name': 'Jacob Weber',
  //   'position': 'Alumni',
  //   'class': 'mu',
  //   'className': 'Mu Class',
  //   'major': 'bio',
  //   'majorName': 'Bioengineering',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/147_jweber.webp'),
  //   'safari': require('./images/brothers/portraits/147_jweber.jpg'),
  // },
  //Nu
  // {
  //   'name': 'Michael Chin',
  //   'position': 'Alumni',
  //   'class': 'nu',
  //   'className': 'Nu Class',
  //   'major': 'cs',
  //   'majorName': 'Computer Science',
  //   'year': 'Class of 2016',
  //   'image': require('./images/brothers/portraits/148_mchin.webp'),
  //   'safari': require('./images/brothers/portraits/148_mchin.jpg'),
  // },
  {
    name: 'Adrian Gutierrez',
    position: 'Alumni',
    class: 'nu',
    className: 'Nu Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/adrian-gutierrez-400a85bb/',
    image: require('./images/brothers/portraits/149_agutierrez.webp'),
    safari: require('./images/brothers/portraits/149_agutierrez.jpg')
  },
  // {
  //   'name': 'Kento Hayworth',
  //   'position': 'Alumni',
  //   'class': 'nu',
  //   'className': 'Nu Class',
  //   'major': 'env',
  //   'majorName': 'Environmental Engineering',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/150_khayworth.webp'),
  //   'safari': require('./images/brothers/portraits/150_khayworth.jpg'),
  // },
  {
    name: 'Judy Ho',
    position: 'Alumni',
    class: 'nu',
    className: 'Nu Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/judy-ho-425941ab/',
    image: require('./images/brothers/portraits/151_jho.webp'),
    safari: require('./images/brothers/portraits/151_jho.jpg')
  },
  {
    name: 'Chetu Khandavilli',
    position: 'Active',
    class: 'nu',
    className: 'Nu Class',
    major: 'nano',
    majorName: 'Nanoengineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/jennie-nguyen-82a78294/',
    image: require('./images/brothers/portraits/152_ckhandavilli.webp'),
    safari: require('./images/brothers/portraits/152_ckhandavilli.jpg')
  },
  // {
  //   'name': 'Steven Lee',
  //   'position': 'Alumni',
  //   'class': 'nu',
  //   'className': 'Nu Class',
  //   'major': 'chem',
  //   'majorName': 'Chemical Engineering',
  //   'year': 'Class of 2017',
  //   'image': require('./images/brothers/portraits/153_slee.webp'),
  //   'safari': require('./images/brothers/portraits/153_slee.jpg'),
  // },
  {
    name: 'Brendon Lim',
    position: 'Alumni',
    class: 'nu',
    className: 'Nu Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/154_blim.webp'),
    safari: require('./images/brothers/portraits/154_blim.jpg')
  },
  {
    name: 'Audrey Olson',
    position: 'Alumni',
    class: 'nu',
    className: 'Nu Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/audreyolson/',
    image: require('./images/brothers/portraits/156_aolson.webp'),
    safari: require('./images/brothers/portraits/156_aolson.jpg')
  },
  {
    name: 'Brian Wuerstle',
    position: 'Alumni',
    class: 'nu',
    className: 'Nu Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2017',
    image: require('./images/brothers/portraits/157_bwuerstle.webp'),
    safari: require('./images/brothers/portraits/157_bwuerstle.jpg')
  },
  {
    name: 'Daniel Zhang',
    position: 'Alumni',
    class: 'nu',
    className: 'Nu Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/dwzhang/',
    image: require('./images/brothers/portraits/158_dzhang.webp'),
    safari: require('./images/brothers/portraits/158_dzhang.jpg')
  },
  //Xi
  {
    name: 'Rishi Dhanaraj',
    position: 'Active',
    class: 'xi',
    className: 'Xi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/rdhanaraj/',
    messenger: 'https://m.me/rishi.dhanaraj/',
    image: require('./images/brothers/portraits/159_rdhanaraj.webp'),
    safari: require('./images/brothers/portraits/159_rdhanaraj.jpg')
  },
  {
    name: 'Tyler Ly',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/tylerly/',
    image: require('./images/brothers/portraits/160_tly.webp'),
    safari: require('./images/brothers/portraits/160_tly.jpg')
  },
  {
    name: 'Brian Lyu',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'ce',
    majorName: 'Computer Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/brian-lyu/',
    image: require('./images/brothers/portraits/161_blyu.webp'),
    safari: require('./images/brothers/portraits/161_blyu.jpg')
  },
  {
    name: 'Shawn Macasieb',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'aero',
    majorName: 'Aerospace Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/shawn-macasieb-5990b996/',
    image: require('./images/brothers/portraits/162_smacasieb.webp'),
    safari: require('./images/brothers/portraits/162_smacasieb.jpg')
  },
  {
    name: 'Momina Mahmood',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/mominamahmood/',
    image: require('./images/brothers/portraits/163_mmahmood.webp'),
    safari: require('./images/brothers/portraits/163_mmahmood.jpg')
  },
  {
    name: 'Jennie Nguyen',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/jennie-nguyen-82a78294/',
    image: require('./images/brothers/portraits/164_jnguyen.webp'),
    safari: require('./images/brothers/portraits/164_jnguyen.jpg')
  },
  {
    name: 'Esther Park',
    position: 'Active',
    class: 'xi',
    className: 'Xi Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/esther-park/',
    image: require('./images/brothers/portraits/165_epark.webp'),
    safari: require('./images/brothers/portraits/165_epark.jpg')
  },
  {
    name: 'Marilyn Sun',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/marilyn-sun-3677494a/',
    image: require('./images/brothers/portraits/166_msun.webp'),
    safari: require('./images/brothers/portraits/166_msun.jpg')
  },
  {
    name: 'Sherman Yip',
    position: 'Alumni',
    class: 'xi',
    className: 'Xi Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/sherman-yip-8a40b47a/',
    image: require('./images/brothers/portraits/167_syip.webp'),
    safari: require('./images/brothers/portraits/167_syip.jpg')
  },
  //Omicron
  {
    name: 'Brian Chan',
    position: 'Active',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/brian-chan-1020/',
    image: require('./images/brothers/portraits/168_bchan.webp'),
    safari: require('./images/brothers/portraits/168_bchan.jpg')
  },
  {
    name: 'Justin Dulay',
    position: 'Active',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'struct',
    majorName: 'Structural Engineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/justin-dulay-9a7b74123/',
    image: require('./images/brothers/portraits/169_jdulay.webp'),
    safari: require('./images/brothers/portraits/169_jdulay.jpg')
  },
  {
    name: 'Michelle Lu Galgana',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2017',
    linkedin: 'https://www.linkedin.com/in/michelle-galgana/',
    image: require('./images/brothers/portraits/170_mgalgana.webp'),
    safari: require('./images/brothers/portraits/170_mgalgana.jpg')
  },
  {
    name: 'Leng Kouv',
    position: 'Active',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'bio',
    majorName: 'BioSystems',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/sivleng-kouv-6510b8129/',
    messenger: 'https://m.me/leng.kouv/',
    image: require('./images/brothers/portraits/171_lkouv.webp'),
    safari: require('./images/brothers/portraits/171_lkouv.jpg')
  },
  {
    name: 'Wonjae Lee',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2018',
    image: require('./images/brothers/portraits/172_wlee.webp'),
    safari: require('./images/brothers/portraits/172_wlee.jpg')
  },
  {
    name: 'David Lin',
    position: 'Active',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2020',
    linkedin: 'https://www.linkedin.com/in/david-lin-a7612073/',
    image: require('./images/brothers/portraits/173_dlin.webp'),
    safari: require('./images/brothers/portraits/173_dlin.jpg')
  },
  {
    name: 'Goutham Marimuthu',
    position: 'Regent',
    eboard: true,
    class: 'omicron',
    className: 'Omicron Class',
    major: 'aero',
    majorName: 'Aerospace Engineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/goutham-marimuthu-3393b3120/',
    messenger: 'https://m.me/goutham.marimuthu/',
    image: require('./images/brothers/portraits/174_gmarimuthu.webp'),
    safari: require('./images/brothers/portraits/174_gmarimuthu.jpg')
  },
  {
    name: 'Aamir Rasheed',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'ce',
    majorName: 'Computer Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/aamir1rasheed/',
    image: require('./images/brothers/portraits/175_arasheed.webp'),
    safari: require('./images/brothers/portraits/175_arasheed.jpg')
  },
  {
    name: 'Mayuki Sasagawa',
    position: 'Active',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/mayuki-a-sasagawa-a09623103/',
    messenger: 'https://m.me/myuki.sasagawa/',
    image: require('./images/brothers/portraits/176_msasagawa.webp'),
    safari: require('./images/brothers/portraits/176_msasagawa.jpg')
  },
  {
    name: 'Fumika Takazawa',
    position: 'Alumni',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/ftakazawa/',
    image: require('./images/brothers/portraits/177_ftakazawa.webp'),
    safari: require('./images/brothers/portraits/177_ftakazawa.jpg')
  },
  {
    name: 'Manwinder Uppal',
    position: 'Active',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/manwinder-uppal-311861109/',
    image: require('./images/brothers/portraits/178_muppal.webp'),
    safari: require('./images/brothers/portraits/178_muppal.jpg')
  },
  {
    name: 'Rachael Wong',
    position: 'Active',
    class: 'omicron',
    className: 'Omicron Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/rachael-sze-nga-wong-9b0100129/',
    messenger: 'https://m.me/rachaelw096/',
    image: require('./images/brothers/portraits/179_rwong.webp'),
    safari: require('./images/brothers/portraits/179_rwong.jpg')
  },
  //Pi
  {
    name: 'Ana Dasgupta',
    position: 'Historian',
    cabinet: true,
    class: 'pi',
    className: 'Pi Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2020',
    linkedin: 'https://www.linkedin.com/in/anahita-dasgupta-788a29133/',
    image: require('./images/brothers/portraits/180_adasgupta.webp'),
    safari: require('./images/brothers/portraits/180_adasgupta.jpg')
  },
  {
    name: 'Hillary Fan',
    position: 'Fundraising Chair',
    cabinet: true,
    class: 'pi',
    className: 'Pi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/hillary-fan-ba13b8104/',
    messenger: 'https://m.me/hilbofan/',
    image: require('./images/brothers/portraits/181_hfan.webp'),
    safari: require('./images/brothers/portraits/181_hfan.jpg')
  },
  {
    name: 'Allen Gao',
    position: 'Active',
    cabinet: true,
    class: 'pi',
    className: 'Pi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/agao323/',
    image: require('./images/brothers/portraits/182_agao.webp'),
    safari: require('./images/brothers/portraits/182_agao.jpg')
  },
  {
    name: 'Shangway Hsu',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/shangwayhsu/',
    image: require('./images/brothers/portraits/183_shsu.webp'),
    safari: require('./images/brothers/portraits/183_shsu.jpg')
  },
  {
    name: 'Kevin Huo',
    position: 'Corresponding Secretary',
    eboard: true,
    class: 'pi',
    className: 'Pi Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/kevin--huo/',
    image: require('./images/brothers/portraits/184_khuo.webp'),
    safari: require('./images/brothers/portraits/184_khuo.jpg')
  },
  {
    name: 'Aston Khor',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/aston-khor-402b4110a/',
    image: require('./images/brothers/portraits/185_akhor.webp'),
    safari: require('./images/brothers/portraits/185_akhor.jpg')
  },
  {
    name: 'Jeffrey Lee',
    position: 'Vice Regent',
    eboard: true,
    class: 'pi',
    className: 'Pi Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/jeffreyzlee/',
    messenger: 'https://m.me/MagicRiceMan/',
    image: require('./images/brothers/portraits/186_jlee.webp'),
    safari: require('./images/brothers/portraits/186_jlee.jpg')
  },
  {
    name: 'Jason Li',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/jason-li-7b946746/',
    image: require('./images/brothers/portraits/187_jli.webp'),
    safari: require('./images/brothers/portraits/187_jli.jpg')
  },
  {
    name: 'Adam Lin',
    position: 'Rush Chair',
    cabinet: true,
    class: 'pi',
    className: 'Pi Class',
    major: 'me',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2020',
    linkedin: 'https://www.linkedin.com/in/adam-lin-539655139/',
    messenger: 'https://m.me/notadamlin/',
    image: require('./images/brothers/portraits/188_alin.webp'),
    safari: require('./images/brothers/portraits/188_alin.jpg')
  },
  {
    name: 'Geoffrey Ngo',
    position: 'Active',
    class: 'pi',
    className: 'Pi Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/189_gngo.webp'),
    safari: require('./images/brothers/portraits/189_gngo.jpg')
  },
  {
    name: 'Meghna Satish',
    position: 'Professional Chair',
    cabinet: true,
    class: 'pi',
    className: 'Pi Class',
    major: 'cs',
    majorName: 'Math - Computer Science',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/190_msatish.webp'),
    safari: require('./images/brothers/portraits/190_msatish.jpg')
  },
  {
    name: 'Victoria Tam',
    position: 'Special Events Chair',
    cabinet: true,
    class: 'pi',
    className: 'Pi Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2019',
    linkedin: 'https://www.linkedin.com/in/victoria-tam-2b5052117/',
    messenger: 'https://m.me/victoria.tam.12/',
    image: require('./images/brothers/portraits/191_vtam.webp'),
    safari: require('./images/brothers/portraits/191_vtam.jpg')
  },
  {
    name: 'John Tayag',
    position: 'Alumni',
    class: 'pi',
    className: 'Pi Class',
    major: 'me',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2018',
    linkedin: 'https://www.linkedin.com/in/john-tayag-325a05133/',
    image: require('./images/brothers/portraits/192_jtayag.webp'),
    safari: require('./images/brothers/portraits/192_jtayag.jpg')
  },
  {
    name: 'Stephanie Zhu',
    position: 'Scribe',
    eboard: true,
    class: 'pi',
    className: 'Pi Class',
    major: 'cs',
    majorName: 'Computer Science - Bioinformatics',
    year: 'Class of 2020',
    messenger: 'https://m.me/stephanie.zhu.31/',
    image: require('./images/brothers/portraits/193_szhu.webp'),
    safari: require('./images/brothers/portraits/193_szhu.jpg')
  },
  //Rho
  {
    name: 'Sydney Huynh',
    position: 'Rush Chair',
    cabinet: true,
    class: 'rho',
    className: 'Rho Class',
    major: 'struct',
    majorName: 'Structural Engineering',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/194_shuynh.webp'),
    safari: require('./images/brothers/portraits/194_shuynh.jpg')
  },
  {
    name: 'Kakeru Imanaka',
    position: 'Active',
    class: 'rho',
    className: 'Rho Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/195_kimanaka.webp'),
    safari: require('./images/brothers/portraits/195_kimanaka.jpg')
  },
  {
    name: 'Angie Joung',
    position: 'Brotherhood Chair',
    cabinet: true,
    class: 'rho',
    className: 'Rho Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/196_ajoung.webp'),
    safari: require('./images/brothers/portraits/196_ajoung.jpg')
  },
  {
    name: 'Stacy Kim',
    position: 'Fundraising Chair',
    cabinet: true,
    class: 'rho',
    className: 'Rho Class',
    major: 'struct',
    majorName: 'Structural Engineering',
    year: 'Class of 2021',
    image: require('./images/brothers/portraits/197_skim.webp'),
    safari: require('./images/brothers/portraits/197_skim.jpg')
  },
  {
    name: 'Justin Lee',
    position: 'Active',
    class: 'rho',
    className: 'Rho Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/198_jlee.webp'),
    safari: require('./images/brothers/portraits/198_jlee.jpg')
  },
  {
    name: 'Dat Nguyen',
    position: 'Active',
    class: 'rho',
    className: 'Rho Class',
    major: 'struct',
    majorName: 'Structural Engineering',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/199_dnguyen.webp'),
    safari: require('./images/brothers/portraits/199_dnguyen.jpg')
  },
  {
    name: 'Soyoun Park',
    position: 'Philanthropy Chair',
    cabinet: true,
    class: 'rho',
    className: 'Rho Class',
    major: 'nano',
    majorName: 'Nanoengineering',
    year: 'Class of 2021',
    image: require('./images/brothers/portraits/200_spark.webp'),
    safari: require('./images/brothers/portraits/200_spark.jpg')
  },
  {
    name: 'Jerry Qing',
    position: 'Active',
    cabinet: true,
    class: 'rho',
    className: 'Rho Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2021',
    image: require('./images/brothers/portraits/201_jqing.webp'),
    safari: require('./images/brothers/portraits/201_jqing.jpg')
  },
  {
    name: 'Huy Tran',
    position: 'Brotherhood Chair',
    cabinet: true,
    class: 'rho',
    className: 'Rho Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2021',
    image: require('./images/brothers/portraits/202_htran.webp'),
    safari: require('./images/brothers/portraits/202_htran.jpg')
  },
  {
    name: 'Erick Wilson',
    position: 'Treasurer',
    eboard: true,
    class: 'rho',
    className: 'Rho Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2020',
    messenger: 'https://m.me/erick.wilson.526/',
    image: require('./images/brothers/portraits/203_ewilson.webp'),
    safari: require('./images/brothers/portraits/203_ewilson.jpg')
  },
  {
    name: 'Jun Yin',
    position: 'Active',
    class: 'rho',
    className: 'Rho Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/MD152_jyin.webp'),
    safari: require('./images/brothers/portraits/MD152_jyin.jpg')
  },
  {
    name: 'Joshua Chao',
    position: 'Webmaster Chair',
    cabinet: true,
    class: 'sigma',
    className: 'Sigma Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/204_jchao.webp'),
    safari: require('./images/brothers/portraits/204_jchao.jpg')
  },
  {
    name: 'Christopher Diep',
    position: 'Active',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/205_cdiep.webp'),
    safari: require('./images/brothers/portraits/205_cdiep.jpg')
  },
  {
    name: 'Eric Huynh',
    position: 'Active',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/206_ehuynh.webp'),
    safari: require('./images/brothers/portraits/206_ehuynh.jpg')
  },
  {
    name: 'Simon Kim',
    position: 'Active',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/207_skim.webp'),
    safari: require('./images/brothers/portraits/207_skim.jpg')
  },
  {
    name: 'Sho Kondo',
    position: 'Academics',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'mech',
    majorName: 'Mechanical Engineering',
    year: 'Class of 2021',
    image: require('./images/brothers/portraits/208_skondo.webp'),
    safari: require('./images/brothers/portraits/208_skondo.jpg')
  },
  {
    name: 'Clark Phan',
    position: 'Webmaster Chair',
    cabinet: true,
    class: 'sigma',
    className: 'Sigma Class',
    major: 'cs',
    majorName: 'Math - Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/209_cphan.webp'),
    safari: require('./images/brothers/portraits/209_cphan.jpg')
  },
  {
    name: 'Justin Shieh',
    position: 'Active',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/210_jshieh.webp'),
    safari: require('./images/brothers/portraits/210_jshieh.jpg')
  },
  {
    name: 'Erin Songwang',
    position: 'Active',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2021',
    image: require('./images/brothers/portraits/211_esongwang.webp'),
    safari: require('./images/brothers/portraits/211_esongwang.jpg')
  },
  {
    name: 'Olivia Thai',
    position: 'Active',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'cs',
    majorName: 'Math - Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/212_othai.webp'),
    safari: require('./images/brothers/portraits/212_othai.jpg')
  },
  {
    name: 'Peggy Tran',
    position: 'Active',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2021',
    image: require('./images/brothers/portraits/213_ptran.webp'),
    safari: require('./images/brothers/portraits/213_ptran.jpg')
  },
  {
    name: 'Scott Tran',
    position: 'Active',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'chem',
    majorName: 'Chemical Engineering',
    year: 'Class of 2019',
    image: require('./images/brothers/portraits/214_stran.webp'),
    safari: require('./images/brothers/portraits/214_stran.jpg')
  },
  {
    name: 'William Tzou',
    position: 'Active',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'nano',
    majorName: 'Nanoengineering',
    year: 'Class of 2021',
    image: require('./images/brothers/portraits/215_wtzou.webp'),
    safari: require('./images/brothers/portraits/215_wtzou.jpg')
  },
  {
    name: 'Jocelyn Wei',
    position: 'Active',
    class: 'sigma',
    className: 'Sigma Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/216_jwei.webp'),
    safari: require('./images/brothers/portraits/216_jwei.jpg')
  },
  {
    name: 'Heather Gan',
    position: 'Active',
    class: 'tau',
    className: 'Tau Class',
    major: 'cs',
    majorName: 'Math - Computer Science',
    year: 'Class of 2022',
    image: require('./images/brothers/portraits/217_hgan.webp'),
    safari: require('./images/brothers/portraits/217_hgan.jpg')
  },
  {
    name: 'Kyle Gillaspy',
    position: 'Active',
    class: 'tau',
    className: 'Tau Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2021',
    image: require('./images/brothers/portraits/218_kgillaspy.webp'),
    safari: require('./images/brothers/portraits/218_kgillaspy.jpg')
  },
  {
    name: 'Rick Huynh',
    position: 'Active',
    class: 'tau',
    className: 'Tau Class',
    major: 'cs',
    majorName: 'Math - Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/219_rhuynh.webp'),
    safari: require('./images/brothers/portraits/219_rhuynh.jpg')
  },
  {
    name: 'Kamran Jahadi',
    position: 'External Events Chair',
    class: 'tau',
    className: 'Tau Class',
    major: 'chem',
    majorName: 'Chemistry',
    year: 'Class of 2021',
    image: require('./images/brothers/portraits/220_kjahadi.webp'),
    safari: require('./images/brothers/portraits/220_kjahadi.jpg')
  },
  {
    name: 'Darren Jian',
    position: 'Active',
    class: 'tau',
    className: 'Tau Class',
    major: 'cs',
    majorName: 'Cognitive Science',
    year: 'Class of 2021',
    image: require('./images/brothers/portraits/221_djian.webp'),
    safari: require('./images/brothers/portraits/221_djian.jpg')
  },
  {
    name: 'Everett Lin',
    position: 'Active',
    class: 'tau',
    className: 'Tau Class',
    major: 'ee',
    majorName: 'Electrical Engineering',
    year: 'Class of 2022',
    image: require('./images/brothers/portraits/222_elin.webp'),
    safari: require('./images/brothers/portraits/222_elin.jpg')
  },
  {
    name: 'Neha Pusarla',
    position: 'Active',
    class: 'tau',
    className: 'Tau Class',
    major: 'cs',
    majorName: 'Computer Science - Bioinformatics',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/223_npusarla.webp'),
    safari: require('./images/brothers/portraits/223_npusarla.jpg')
  },
  {
    name: 'Raeek Rahman',
    position: 'External Events Chair',
    class: 'tau',
    className: 'Tau Class',
    major: 'bio',
    majorName: 'Bioengineering',
    year: 'Class of 2022',
    image: require('./images/brothers/portraits/224_rrahman.webp'),
    safari: require('./images/brothers/portraits/224_rrahman.jpg')
  },
  {
    name: 'Jonathan Song',
    position: 'Active',
    class: 'tau',
    className: 'Tau Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2021',
    image: require('./images/brothers/portraits/225_jsong.webp'),
    safari: require('./images/brothers/portraits/225_jsong.jpg')
  },
  {
    name: 'Angelica Jane Tan',
    position: 'Active',
    class: 'tau',
    className: 'Tau Class',
    major: 'aero',
    majorName: 'Aerospace Engineering',
    year: 'Class of 2021',
    image: require('./images/brothers/portraits/226_atan.webp'),
    safari: require('./images/brothers/portraits/226_atan.jpg')
  },
  {
    name: 'Britney Tran',
    position: 'Active',
    class: 'tau',
    className: 'Tau Class',
    major: 'env',
    majorName: 'Environmental Engineering',
    year: 'Class of 2022',
    image: require('./images/brothers/portraits/227_btran.webp'),
    safari: require('./images/brothers/portraits/227_btran.jpg')
  },
  {
    name: 'Will Xu',
    position: 'Active',
    class: 'tau',
    className: 'Tau Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/228_wxu.webp'),
    safari: require('./images/brothers/portraits/228_wxu.jpg')
  },
  {
    name: 'Esther Zhao',
    position: 'Active',
    class: 'tau',
    className: 'Tau Class',
    major: 'cs',
    majorName: 'Computer Science',
    year: 'Class of 2020',
    image: require('./images/brothers/portraits/229_ezhao.webp'),
    safari: require('./images/brothers/portraits/229_ezhao.jpg')
  }
];

/* Deprecated */
const alumni = [
  {
    name: 'Aeri Iamsirithaworn',
    position: 'Alumni',
    class: 'iota',
    className: 'Iota Class',
    major: 'cs',
    majorName: 'Computer Science',
    image: require('./images/brothers/alumni/aeri_iamsirithaworn.webp'),
    safari: require('./images/brothers/alumni/aeri_iamsirithaworn.jpg')
  },
  {
    name: 'Andrew Sie',
    position: 'Alumni',
    class: 'iota',
    className: 'Iota Class',
    majorName: 'Computer Science',
    image: require('./images/brothers/alumni/andrew_sie.webp'),
    safari: require('./images/brothers/alumni/andrew_sie.jpg')
  },
  {
    name: 'Azhar Deen',
    position: 'Alumni',
    class: 'iota',
    className: 'Iota Class',
    majorName: 'Computer Science',
    image: require('./images/brothers/alumni/azhar_deen.webp'),
    safari: require('./images/brothers/alumni/azhar_deen.jpg')
  }
  // {
  //   'name': 'Best Tech',
  //   'professional_webp': require('./images/brothers/alumni/bchan.webp'),
  //   'position': 'Alumni',
  //   'class': 'charter',
  //   'className': 'Charter Class',
  //   'majorName': 'Computer Science'
  // },
  // {
  //   'name': 'Michael Luo',
  //   'professional_webp': require('./images/brothers/alumni/michael_luo.webp'),
  //   'position': 'Alumni',
  //   'class': 'iota',
  //   'className': 'Iota Class',
  //   'majorName': 'Computer Science',
  // },
  // {
  //   'name': 'Patrick Chen',
  //   'professional_webp': require('./images/brothers/alumni/patrick_chen.webp'),
  //   'position': 'Alumni',
  //   'class': 'iota',
  //   'className': 'Iota Class',
  //   'majorName': 'Computer Science',
  // },
  // {
  //   'name': 'Sharon Zheng',
  //   'professional_webp': require('./images/brothers/alumni/sharon_zheng.webp'),
  //   'position': 'Alumni',
  //   'class': 'iota',
  //   'className': 'Iota Class',
  //   'majorName': 'Computer Science',
  // },
  // {
  //   'name': 'Thomas Kuo',
  //   'professional_webp': require('./images/brothers/alumni/thomas_kuo.webp'),
  //   'position': 'Alumni',
  //   'class': 'iota',
  //   'className': 'Iota Class',
  //   'majorName': 'Computer Science',
  // },
  // {
  //   'name': 'Woongkee Min',
  //   'professional_webp': require('./images/brothers/alumni/woongkee_min.webp'),
  //   'position': 'Alumni',
  //   'class': 'iota',
  //   'className': 'Iota Class',
  //   'majorName': 'Computer Science',
  // },
  // {
  //   'name': 'Yutang Lin',
  //   'professional_webp': require('./images/brothers/alumni/yutang_lin.webp'),
  //   'position': 'Alumni',
  //   'class': 'iota',
  //   'className': 'Iota Class',
  //   'majorName': 'Computer Science',
  // },
];

const options = {
  general: [
    { value: 'active', label: 'Active' },
    { value: 'alumni', label: 'Alumni' },
    // { value: 'all', label: 'All' },
    { value: 'class', label: 'Class' },
    { value: 'major', label: 'Major' }
  ],
  active: [{ value: 'eboard', label: 'Executive Board' }, { value: 'cabinet', label: 'Cabinet' }],
  major: [
    {
      value: 'aero',
      label: 'Aerospace Engineering',
      image: require('./images/majors/logos/aero.png')
    },
    {
      value: 'bio',
      label: 'Bioengineering',
      image: require('./images/majors/logos/bio.png')
    },
    {
      value: 'chem',
      label: 'Chemical Engineering',
      image: require('./images/majors/logos/chem.png')
    },
    {
      value: 'ce',
      label: 'Computer Engineering',
      image: require('./images/majors/logos/ce.png')
    },
    {
      value: 'cs',
      label: 'Computer Science',
      image: require('./images/majors/logos/ce.png')
    },
    {
      value: 'ee',
      label: 'Electrical Engineering',
      image: require('./images/majors/logos/ee.png')
    },
    {
      value: 'env',
      label: 'Environmental Engineering',
      image: require('./images/majors/logos/env.png')
    },
    {
      value: 'mech',
      label: 'Mechanical Engineering',
      image: require('./images/majors/logos/mech.png')
    },
    {
      value: 'nano',
      label: 'Nanoengineering',
      image: require('./images/majors/logos/nano.png')
    },
    {
      value: 'struct',
      label: 'Structural Engineering',
      image: require('./images/majors/logos/struct.png')
    },
    {
      value: 'other',
      label: 'Other',
      image: require('./images/majors/logos/mech.png')
    }
  ],
  class: [
    {
      value: 'charter',
      label: 'Charter',
      image: require('./images/classes/letters/charter.jpg')
    },
    {
      value: 'alpha',
      label: 'Alpha',
      image: require('./images/classes/letters/alpha.png')
    },
    {
      value: 'beta',
      label: 'Beta',
      image: require('./images/classes/letters/beta.png')
    },
    {
      value: 'gamma',
      label: 'Gamma',
      image: require('./images/classes/letters/gamma.png')
    },
    {
      value: 'delta',
      label: 'Delta',
      image: require('./images/classes/letters/delta.png')
    },
    {
      value: 'epsilon',
      label: 'Epsilon',
      image: require('./images/classes/letters/epsilon.png')
    },
    {
      value: 'zeta',
      label: 'Zeta',
      image: require('./images/classes/letters/zeta.png')
    },
    {
      value: 'eta',
      label: 'Eta',
      image: require('./images/classes/letters/eta.png')
    },
    {
      value: 'theta',
      label: 'Theta',
      image: require('./images/classes/letters/theta.png')
    },
    {
      value: 'iota',
      label: 'Iota',
      image: require('./images/classes/letters/iota.png')
    },
    {
      value: 'kappa',
      label: 'Kappa',
      image: require('./images/classes/letters/kappa.png')
    },
    {
      value: 'lambda',
      label: 'Lambda',
      image: require('./images/classes/letters/lambda.png')
    },
    {
      value: 'mu',
      label: 'Mu',
      image: require('./images/classes/letters/mu.png')
    },
    {
      value: 'nu',
      label: 'Nu',
      image: require('./images/classes/letters/nu.png')
    },
    {
      value: 'xi',
      label: 'Xi',
      image: require('./images/classes/letters/xi.png')
    },
    {
      value: 'omicron',
      label: 'Omicron',
      image: require('./images/classes/letters/omicron.png')
    },
    {
      value: 'pi',
      label: 'Pi',
      image: require('./images/classes/letters/pi.png')
    },
    {
      value: 'rho',
      label: 'Rho',
      image: require('./images/classes/letters/rho.png')
    },
    {
      value: 'sigma',
      label: 'Sigma',
      image: require('./images/classes/letters/sigma.png')
    },
    {
      value: 'tau',
      label: 'Tau',
      image: require('./images/classes/letters/tau.png')
    }
  ]
};

const images = [
  {
    name: 'active',
    webp: require('./images/general/active.webp'),
    jpg: require('./images/general/active.jpg')
  },
  {
    name: 'all',
    webp: require('./images/general/active.webp'),
    jpg: require('./images/general/active.jpg')
  },
  {
    name: 'major',
    webp: require('./images/general/major.webp'),
    jpg: require('./images/general/major.jpg')
  },
  {
    name: 'class',
    webp: require('./images/general/active.webp'),
    jpg: require('./images/general/active.jpg')
  },
  {
    name: 'alumni',
    webp: require('./images/general/alumni.webp'),
    jpg: require('./images/general/alumni.jpg')
  },
  {
    name: 'eboard',
    webp: require('./images/general/active.webp'),
    jpg: require('./images/general/active.jpg')
  },
  {
    name: 'cabinet',
    webp: require('./images/general/active.webp'),
    jpg: require('./images/general/active.jpg')
  },
  {
    name: 'cs',
    webp: require('./images/majors/images/cs.webp'),
    jpg: require('./images/majors/images/cs.jpg')
  },
  {
    name: 'aero',
    webp: require('./images/majors/images/aero.webp'),
    jpg: require('./images/majors/images/aero.jpg')
  },
  {
    name: 'mech',
    webp: require('./images/majors/images/mech-struct.webp'),
    jpg: require('./images/majors/images/mech-struct.jpg')
  },
  {
    name: 'env',
    webp: require('./images/majors/images/env.webp'),
    jpg: require('./images/majors/images/env.jpg')
  },
  {
    name: 'ce',
    webp: require('./images/majors/images/cs.webp'),
    jpg: require('./images/majors/images/cs.jpg')
  },
  {
    name: 'bio',
    webp: require('./images/majors/images/bio.webp'),
    jpg: require('./images/majors/images/bio.jpg')
  },
  {
    name: 'chem',
    webp: require('./images/majors/images/chem.webp'),
    jpg: require('./images/majors/images/chem.jpg')
  },
  {
    name: 'ee',
    webp: require('./images/majors/images/ee.webp'),
    jpg: require('./images/majors/images/ee.jpg')
  },
  {
    name: 'struct',
    webp: require('./images/majors/images/mech-struct.webp'),
    jpg: require('./images/majors/images/mech-struct.jpg')
  },
  {
    name: 'other',
    webp: require('./images/majors/images/mech-struct.webp'),
    jpg: require('./images/majors/images/mech-struct.jpg')
  },
  {
    name: 'nano',
    webp: require('./images/majors/images/chem.webp'),
    jpg: require('./images/majors/images/chem.jpg')
  },
  {
    name: 'charter',
    webp: require('./images/classes/images/charter.webp'),
    jpg: require('./images/classes/images/charter.jpg')
  },
  {
    name: 'alpha',
    webp: require('./images/classes/images/alpha.webp'),
    jpg: require('./images/classes/images/alpha.jpg')
  },
  {
    name: 'beta',
    webp: require('./images/classes/images/charter.webp'),
    jpg: require('./images/classes/images/charter.jpg')
  },
  {
    name: 'gamma',
    webp: require('./images/classes/images/gamma.webp'),
    jpg: require('./images/classes/images/gamma.jpg')
  },
  {
    name: 'delta',
    webp: require('./images/classes/images/delta.webp'),
    jpg: require('./images/classes/images/delta.jpg')
  },
  {
    name: 'epsilon',
    webp: require('./images/classes/images/epsilon.webp'),
    jpg: require('./images/classes/images/epsilon.jpg')
  },
  {
    name: 'zeta',
    webp: require('./images/classes/images/zeta.webp'),
    jpg: require('./images/classes/images/zeta.jpg')
  },
  {
    name: 'eta',
    webp: require('./images/classes/images/eta.webp'),
    jpg: require('./images/classes/images/eta.jpg')
  },
  {
    name: 'theta',
    webp: require('./images/classes/images/theta.webp'),
    jpg: require('./images/classes/images/theta.jpg')
  },
  {
    name: 'iota',
    webp: require('./images/classes/images/iota.webp'),
    jpg: require('./images/classes/images/iota.jpg')
  },
  {
    name: 'kappa',
    webp: require('./images/classes/images/kappa.webp'),
    jpg: require('./images/classes/images/kappa.jpg')
  },
  {
    name: 'lambda',
    webp: require('./images/classes/images/lambda.webp'),
    jpg: require('./images/classes/images/lambda.jpg')
  },
  {
    name: 'mu',
    webp: require('./images/classes/images/mu.webp'),
    jpg: require('./images/classes/images/mu.jpg')
  },
  {
    name: 'nu',
    webp: require('./images/classes/images/nu.webp'),
    jpg: require('./images/classes/images/nu.jpg')
  },
  {
    name: 'xi',
    webp: require('./images/classes/images/xi.webp'),
    jpg: require('./images/classes/images/xi.jpg')
  },
  {
    name: 'omicron',
    webp: require('./images/classes/images/omicron.webp'),
    jpg: require('./images/classes/images/omicron.jpg')
  },
  {
    name: 'pi',
    webp: require('./images/classes/images/pi.webp'),
    jpg: require('./images/classes/images/pi.jpg')
  },
  {
    name: 'rho',
    webp: require('./images/classes/images/rho.webp'),
    jpg: require('./images/classes/images/rho.jpg')
  }
];

export { brothers, alumni, options, images };
