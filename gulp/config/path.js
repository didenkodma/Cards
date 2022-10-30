// Папки проекту
const buildFolder = `./dist`;
const srcFolder = `./src`;

// Кінцевий об'єкт з інформацією про шляхи до файлів, папок
export const path = {
    build: {
        js: `${buildFolder}/js/`,
        css: `${buildFolder}/css/`,
        html: `${buildFolder}/`,
        images: `${buildFolder}/img/`
    },
    src: {
        js: `${srcFolder}/js/**/*.js`,
        images: `${srcFolder}/img/**/*.*`,
        scss: `${srcFolder}/scss/style.scss`,
        html: `${srcFolder}/*.html`,
    },
    watch: {
        js: `${srcFolder}/js/**/*.js`,
        scss: `${srcFolder}/scss/**/*.scss`,
        html: `${srcFolder}/**/*.html`,
        images: `${srcFolder}/img/**/*.*`,
    },
    clean: buildFolder,
    buildFolder: buildFolder,
    srcFolder: srcFolder
}