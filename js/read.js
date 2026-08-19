const storyData = {
  title: "The Praised Fool",
  author: "Freedom Adetoye",
  coverImage: "../assets/images/cover_image.png",
  days: [
    {
      day: 1,
      title: "Who is James?",
      content: `
        <p>"Ah... James, why are you not picking my calls? Do you think you are important? I just wanted you to do something for me," James' friend said angrily.</p>
        <p>"Oh, my phone was off. I probably only saw your call this morning after charging it," James replied.</p>
        <p>"Always coming up with excuses. See, let me give you some advice. You better know the people who are destined for your life and cling to them. That way, you can be successful in life," his friend said.</p>
        
        <hr class="story-divider">

        <p>James was a 17-year-old Nigerian boy, now in university, studying Law in 100 level.</p>
        <p>He had zero interest in Law. But he had obliged to his parents' wishes.</p>
        <p>It wasn't necessarily because his parents had truly forced him. James was simply too silent to tell them what he actually wanted. So he convinced himself that they must be doing what was best for him.</p>
        <p>James had spent most of his life unable to tell anyone how he truly felt.</p>

        <ul class="story-list">
          <li>He died in silence.</li>
          <li>He acted in silence.</li>
          <li>And whenever something was wrong, he kept it to himself.</li>
        </ul>

        <p>His friend on campus was also an alumnus of the school and already owned a small shop. He had once offered James a job.</p>
        <p>James turned it down immediately.</p>
        <p>Instead, he promised to help whenever he had spare time.</p>
        <p>Now, that decision was beginning to weigh heavily on him.</p>
        <p>James had no money. Bills were piling up. Even with his little knowledge of technology, he could have landed a small gig by now.</p>
        <p>But he didn't.</p>
        <p>Meanwhile, his friend had developed the habit of constantly telling him to come and stay in his shop.</p>
        <p>Whenever James failed to pick his calls, his friend accused him of causing losses to the business.</p>
        <p>And James? The silent, foolish James would apologize. Every time. He would ask for forgiveness and move on.</p>
        <p>Today was no different. Feeling guilty, James was willing to spend the entire day at his friend's shop and cancel everything else he had planned.</p>
        
        <p>James' trust in everyone—including himself—was almost zero. But it hadn't always been that way. When he was little, James talked a lot. Too much, according to his parents. He would even tell outsiders things his parents considered confidential. His parents constantly scolded him for talking about everything outside the home.</p>
        
        <p class="dialogue-quote">"Stop telling people everything!"</p>
        
        <p>So James stopped. He became shy. He became afraid of saying the wrong thing. He became afraid of being seen. And slowly, he learned to die in silence. That silence became what people eventually called foolishness.</p>
        <p>But James wasn't actually foolish. He simply acted foolish. He was overly submissive. He allowed people to cross boundaries without resistance. And because he rarely complained, people assumed they could crush him.</p>
        <p>James had learned basic data entry and processing using Microsoft Word and Excel. He even worked for his father's boss without receiving a salary. Yet he continued to receive praise.</p>
        
        <blockquote class="story-quote">
          <p>"James is very hardworking."</p>
          <p>"James is good with computers."</p>
          <p>"James learns very fast."</p>
        </blockquote>

        <p>The praise kept coming. And so did the work.</p>
        <p>James also learned basic coding, programming, and web development. For his first ever web development job, he should have charged money. He didn't. Instead, he convinced himself that he shouldn't charge because an AI website builder had done most of the work.</p>
        
        <p class="dialogue-quote">"I only wrote the prompt," he would say.</p>
        
        <p>The project was an e-commerce store for his friend's business. His friend wanted to explore online selling. James warned him that managing an online store would require a lot of work, especially because he already handled the physical shop almost by himself. But James still built it.</p>
        <p>For two months, he helped his friend use it. He added things. He fixed things. He expanded it. Then his friend eventually abandoned it. James received praise. Again.</p>
        <p>It seemed that whenever James became interested in something, he could learn it at an incredible speed. Technology. Coding. Web development. Data processing. Almost everything. Except Law.</p>
        <p>But praise was becoming James' strange reward. People praised his skills. They praised his obedience. They praised his willingness to help. They praised his silence. And somehow, all that praise was slowly becoming a prison.</p>
        
        <hr class="story-divider">

        <p>It was 10:40 a.m. James had a class by 11. He was already running late. He rushed past his friend's shop.</p>
        
        <p class="dialogue-quote">"We shall see when I get back," James said.</p>
        
        <p>Ahead of him were things he couldn't yet see. Opportunities. Failures. Money. Losses. Friendships. And perhaps, eventually, a version of himself he had never met.</p>
        <p>But for now, James remained what everyone thought he was: A quiet, shy, foolish boy who was always willing to help.</p>
        <p>As he walked toward the lecture room, one thought kept repeating in his head.</p>
        
        <p class="dialogue-quote">"How do I get money to pay back this guy my debts?"</p>
        
        <p>James kept walking. He said nothing. As usual.</p>
      `
    },
    {
      day: 2,
      title: "The Weight of Expectations",
      content: `
        <p>Day 2 begins with the early morning lecture bell ringing across the campus quadrangle.</p>
        <p>James sat near the back of the large 100-level Law lecture theatre, staring blankly at the slide presentation.</p>
        <p>Prof. Adeleke's voice droned on about constitutional precedents, but none of it registered.</p>
        <p>His phone buzzed quietly in his palm. A text message from his friend: <em>"Where are you? The delivery guy is here and you left the inventory sheets unchecked."</em></p>
        <p>James let out a quiet sigh, typing out an apology before he even realized he was doing it.</p>
        <p class="dialogue-quote">"I'm on my way," he texted back. Another day surrendered.</p>
      `
    },
    {
      day: 3,
      title: "Code and Conscience",
      content: `
        <p>Day 3 brings a brief escape.</p>
        <p>In the quiet hours of midnight, long after the campus lights dimmed, James opened his laptop.</p>
        <p>Away from the shop demands and university lectures, his fingers moved smoothly across the keyboard, fixing a stubborn bug in a Python script he was building for fun.</p>
        <p>For a brief moment, he wasn't the submissive law student trapped in silence.</p>
        <p>He was a creator. But morning was coming fast, and with it, the familiar weight of obligations.</p>
      `
    }
  ]
};

document.addEventListener('DOMContentLoaded', () => {
  const STORAGE_KEY = 'readday_praised_fool_progress';
  
  // Set sidebar cover background image dynamically
  const coverDiv = document.getElementById('sidebar-cover');
  if (coverDiv) {
    coverDiv.style.backgroundImage = `url('${storyData.coverImage}')`;
  }

  // Retrieve saved progress or default to Day 1
  let activeDayNum = parseInt(localStorage.getItem(STORAGE_KEY)) || 1;
  
  // Validate if day exists
  if (!storyData.days.some(d => d.day === activeDayNum)) {
    activeDayNum = 1;
  }

  function renderSidebar() {
    const listContainer = document.getElementById('chapters-list');
    listContainer.innerHTML = '';

    storyData.days.forEach((item) => {
      const li = document.createElement('li');
      li.className = `chapter-item ${item.day === activeDayNum ? 'active' : ''}`;
      li.innerHTML = `
        <span class="chap-num">Day ${item.day}</span>
        <span class="chap-title">${item.title}</span>
      `;

      li.addEventListener('click', () => {
        activeDayNum = item.day;
        localStorage.setItem(STORAGE_KEY, activeDayNum);
        renderSidebar();
        loadDayContent(activeDayNum);
      });

      listContainer.appendChild(li);
    });
  }

  function loadDayContent(dayNum) {
    const dayObj = storyData.days.find(d => d.day === dayNum);
    if (!dayObj) return;

    // Update Header
    document.getElementById('content-day-header').textContent = `DAY ${dayObj.day}: ${dayObj.title}`;
    
    // Update Content
    document.getElementById('story-text-container').innerHTML = dayObj.content;

    // Scroll content view back to top smoothly
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Initial load
  renderSidebar();
  loadDayContent(activeDayNum);
});