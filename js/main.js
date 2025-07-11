//모바일 버튼
$(function () {
  $('.m_ham').click(function () {
    $(this).toggleClass('active');
    $('.m_menu').slideToggle();
  });
  $('.m_menu li a').click(function () {
    $('.m_menu').slideUp();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  if (window.innerWidth >= 1024) {
    const items = document.querySelectorAll(".works_list");

    items.forEach((item) => {
      const imgBox = item.querySelector(".img_box");
      const video = imgBox.querySelector("video");
      let hoverTween;

      item.addEventListener("mouseenter", (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - imgBox.offsetWidth / 2;
        const y = e.clientY - rect.top - imgBox.offsetHeight / 2;

        imgBox.style.visibility = "visible";

        gsap.set(imgBox, { x, y });
        gsap.to(imgBox, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out"
        });

        // ▶️ 비디오가 있다면 재생
        if (video) {
          video.currentTime = 0;
          video.play();
        }
      });

      item.addEventListener("mousemove", (e) => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - imgBox.offsetWidth / 2;
        const y = e.clientY - rect.top - imgBox.offsetHeight / 2;

        if (hoverTween) hoverTween.kill();

        hoverTween = gsap.to(imgBox, {
          x,
          y,
          duration: 0.4,
          ease: "power3.out"
        });
      });

      item.addEventListener("mouseleave", () => {
        if (hoverTween) hoverTween.kill();

        gsap.to(imgBox, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
          onComplete: () => {
            imgBox.style.visibility = "hidden";
            // ⏸️ 비디오 멈추고 다시 처음으로
            if (video) {
              video.pause();
              video.currentTime = 0;
            }
          }
        });
      });
    });
  }
});



//시계
function updateClock() {
  const now = new Date();
  const daysOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  const dayOfWeek = daysOfWeek[now.getDay()];
  const year = now.getFullYear();
  const month = (now.getMonth() + 1).toString().padStart(2, '0');
  const day = now.getDate().toString().padStart(2, '0');
  const hours = now.getHours();
  const minutes = now.getMinutes().toString().padStart(2, '0');
  const seconds = now.getSeconds().toString().padStart(2, '0');

  let ampm = 'AM';
  let displayHours = hours;

  if (hours >= 12) {
    ampm = 'PM';
    displayHours = hours % 12;
    if (displayHours === 0) {
      displayHours = 12;
    }
  }

  const timeString = `${year}-${month}-${day} (${dayOfWeek}) ${displayHours}:${minutes}:${seconds} ${ampm}`;
  document.getElementById('clock').textContent = timeString;
}

// 매 초마다 시계 업데이트
setInterval(updateClock, 1000);

// 페이지 로드 시에도 시계 업데이트
updateClock();
