function toggleMenu(){
    let toggle = document.querySelector('.toggle');
    let main_dashboard = document.querySelector('.main_dashboard');
    let main = document.querySelector('.main');
    let uniser_logo = document.querySelector('.uniser_logo');

    uniser_logo.classList.toggle('active');
    toggle.classList.toggle('active');
    main_dashboard.classList.toggle('active');
    main.classList.toggle('active');
}