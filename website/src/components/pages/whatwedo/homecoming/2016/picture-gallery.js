
const c = require('csam/lib/component')

const PictureGallery = require('../../../../uikit/picture-gallery')

const images = {
  groupPictures: [
    '/media/what-we-do/homecoming/2016/group-pictures/DH-305-6862.jpg',
    '/media/what-we-do/homecoming/2016/group-pictures/DH-305-6867.jpg',
    '/media/what-we-do/homecoming/2016/group-pictures/DH-305-6868.jpg',
    '/media/what-we-do/homecoming/2016/group-pictures/DH-305-6870.jpg',
    '/media/what-we-do/homecoming/2016/group-pictures/DH-305-6871.jpg',
    '/media/what-we-do/homecoming/2016/group-pictures/DH-305-6877.jpg',
    '/media/what-we-do/homecoming/2016/group-pictures/DH-305-6878.jpg',
    '/media/what-we-do/homecoming/2016/group-pictures/DH-305-6911.jpg',
    '/media/what-we-do/homecoming/2016/group-pictures/DH-305-6912.jpg'
  ],
  chillGrill: [
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6883.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6885.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6886.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6893.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6894.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6897.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6898.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6900.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6918.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6919.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6922.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6925.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6927.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6928.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6929.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6930.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6931.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6932.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6933.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6934.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6936.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6937.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6939.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6942.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6943.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6944.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6945.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6946.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6947.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6948.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6951.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6953.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6954.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6955.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6957.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6958.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6959.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6960.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6964.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6965.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6967.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6968.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6969.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6970.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6971.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6972.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6974.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6975.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6977.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6979.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6980.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6982.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6984.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6985.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6988.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6989.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6990.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6992.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6993.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6994.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6995.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6996.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6998.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6999.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7001.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7003.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7004.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7005.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7007.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7009.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7011.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7013.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7014.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7015.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7016.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7017.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7018.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7020.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7024.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7025.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7026.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7027.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7028.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7029.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7030.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7031.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7032.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7033.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7038.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7039.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7040.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7042.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7043.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7044.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7046.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7047.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7050.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7060.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7061.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7063.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7067.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7070.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7082.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-7094.jpg',
    '/media/what-we-do/homecoming/2016/chill-grill/DH-305-6924.jpg'
  ],
  alumniLounge: [
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7100.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7101.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7107.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7110.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7111.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7112.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7114.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7116.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7118.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7120.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7121.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7123.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7125.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7126.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7131.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7133.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7134.jpg',
    '/media/what-we-do/homecoming/2016/alumni-lounge/DH-305-7136.jpg'
  ],
  jacobsGames: [
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7146.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7148.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7149.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7153.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7158.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7164.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7167.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7171.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7173.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7174.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7181.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7183.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7184.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7187.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7190.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7191.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7196.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7197.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7209.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7211.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7213.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7216.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7221.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7233.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7235.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7238.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7239.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7242.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7243.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7244.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7246.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7261.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7262.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7266.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7269.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7270.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7272.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7280.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-71911.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7273.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7168.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7176.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7247.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7157.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7264.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7071.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7194.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7076.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7189.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7160.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7041.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7253.jpg',
    '/media/what-we-do/homecoming/2016/jacobs-games/DH-305-7274.jpg'
  ],
  galaDinner: [
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7283.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7284.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7287.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7289.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7290.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7291.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7292.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7294.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7295.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7298.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7299.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7300.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7302.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7304.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7305.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7306.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7307.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7309.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/Dh-305-7310.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7318.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7320.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7322.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7324.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7325.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7326.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7327.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7328.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7329.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7330.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7335.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7337.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7338.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7340.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7342.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7344.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7345.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7346.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7349.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7350.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7351.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7352.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7354.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7356.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7358.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7364.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7366.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7367.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7368.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7369.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7370.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7376.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7386.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7387.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7388.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7392.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7395.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7396.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7397.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7401.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7404.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7405.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7410.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7412.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7413.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7415.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7416.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7418.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7424.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7425.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7426.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7428.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7429.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7431.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7432.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7433.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7435.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7436.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7438.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7440.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7442.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7445.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7446.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7453.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7456.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7458.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7460.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7463.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7465.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7482.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7484.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7485.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7487.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7488.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7490.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7491.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7494.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7495.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7496.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7498.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-7500.jpg',
    '/media/what-we-do/homecoming/2016/gala-dinner/DH-305-6926.jpg'
  ]
}

module.exports = function(props, children) {
  var props = props || {}

  return (
    <article class="uk-article">
      <h1 class="uk-article-title">Homecoming 2016 - Picture Gallery</h1>
      <p>
        <strong>
          <a href="https://drive.google.com/open?id=0B8rNJ2excuRGdktrOVRNUjRQanM">
            Click here
          </a> to download the images in full quality. Please note that you must be logged in to be able to do this.
        </strong>
      </p>

      <h2>Group pictures</h2>

      <PictureGallery images={ images.groupPictures } />

      <h2>Chill & Grill</h2>

      <PictureGallery images={ images.chillGrill } />

      <h2>Alumni Lounge</h2>

      <PictureGallery images={ images.alumniLounge } />

      <h2>Jacobs Games</h2>

      <PictureGallery images={ images.jacobsGames } />

      <h2>Gala Dinner</h2>

      <PictureGallery images={ images.galaDinner } />

      <p>
        Posted by Stefan Rustler | October 19th, 2016
      </p>
    </article>
  )
}


