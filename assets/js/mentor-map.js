(() => {
  const groups = [
    {
      label: "Hong Kong / CUHK",
      x: 2315,
      y: 612,
      names: [
        "Peony Ka Kiu Lai",
        "Elwin Ka Yue Li",
        "Wong Yin Lam",
        "Aidan Chong",
        "Juno C. L. Chan",
      ],
      detail: "Co-mentored with Kipp Cannon, Otto A. Hannuksela, Alan J. Weinstein, and Tjonnie G. F. Li.",
      color: "#237d96",
    },
    {
      label: "University of Tokyo",
      x: 2445,
      y: 488,
      names: ["Seonjun Kwon"],
      detail: "Co-mentored with Kipp Cannon.",
      color: "#237d96",
    },
    {
      label: "Santa Monica College",
      x: 425,
      y: 528,
      names: ["Haley Boswell"],
      detail: "Co-mentored with Alan J. Weinstein.",
      color: "#237d96",
    },
    {
      label: "KU Leuven",
      x: 1440,
      y: 396,
      names: ["Diarmuid Eamonn O Foghlu"],
      detail: "Co-mentored with Tjonnie G. F. Li.",
      color: "#237d96",
    },
    {
      label: "University of Glasgow",
      x: 1360,
      y: 360,
      names: ["Storm Colloms"],
      detail: "Co-mentored with Alan J. Weinstein.",
      color: "#237d96",
    },
    {
      label: "Louisiana State University",
      x: 620,
      y: 520,
      names: ["Darin Mumma"],
      detail: "Co-mentored with Colm Talbot and Alan J. Weinstein.",
      color: "#237d96",
    },
    {
      label: "University of Arizona",
      x: 520,
      y: 500,
      names: ["Sonja O. T. Choi"],
      detail: "Co-mentored with Tjonnie G. F. Li.",
      color: "#237d96",
    },
    {
      label: "Texas A&M University",
      x: 660,
      y: 510,
      names: ["Zhilong (Franklin) Wang"],
      detail: "Co-mentored with Tjonnie G. F. Li.",
      color: "#237d96",
    },
    {
      label: "National Tsing Hua University",
      x: 2405,
      y: 562,
      names: ["En-Tzu Lin"],
      detail: "Co-mentored with Tjonnie G. F. Li.",
      color: "#237d96",
    },
  ];

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function renderNames(names) {
    const list = document.createElement("ul");
    list.className = "mentor-card-list";
    names.forEach((name) => {
      const li = document.createElement("li");
      li.textContent = name;
      list.appendChild(li);
    });
    return list;
  }

  function setCard(card, group) {
    clear(card);
    const title = document.createElement("strong");
    title.textContent = group.label;
    const list = renderNames(group.names);
    const note = document.createElement("p");
    note.textContent = group.detail;
    card.appendChild(title);
    card.appendChild(list);
    card.appendChild(note);
  }

  function draw(root) {
    const svg = root.querySelector("[data-mentor-map-svg]");
    const pins = root.querySelector("[data-mentor-map-pins]");
    const card = root.querySelector("[data-mentor-map-card]");
    if (!svg || !pins || !card) return;

    const active = new Map();

    function activate(group, pin) {
      setCard(card, group);
      pins.querySelectorAll(".mentor-pin").forEach((node) => {
        const isActive = node === pin;
        node.classList.toggle("is-active", isActive);
        node.setAttribute("aria-pressed", isActive ? "true" : "false");
      });
    }

    groups.forEach((group) => {
      const pin = document.createElementNS("http://www.w3.org/2000/svg", "g");
      pin.setAttribute("class", "mentor-pin");
      pin.setAttribute("role", "button");
      pin.setAttribute("tabindex", "0");
      pin.setAttribute("aria-pressed", "false");
      pin.setAttribute("aria-label", `${group.label}: ${group.names.join(", ")}`);
      pin.setAttribute("data-group", group.label);

      const dot = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      dot.setAttribute("cx", group.x);
      dot.setAttribute("cy", group.y);
      dot.setAttribute("r", 14);
      dot.setAttribute("fill", group.color);
      dot.setAttribute("stroke", "#ffffff");
      dot.setAttribute("stroke-width", "4");
      pin.appendChild(dot);

      const badge = document.createElementNS("http://www.w3.org/2000/svg", "text");
      badge.setAttribute("x", group.x);
      badge.setAttribute("y", group.y + 5);
      badge.setAttribute("text-anchor", "middle");
      badge.setAttribute("class", "mentor-pin-label");
      badge.textContent = String(group.names.length);
      pin.appendChild(badge);

      const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
      title.textContent = `${group.label}: ${group.names.join(", ")}`;
      pin.appendChild(title);

      pin.addEventListener("mouseenter", () => activate(group, pin));
      pin.addEventListener("focus", () => activate(group, pin));
      pin.addEventListener("click", () => activate(group, pin));
      pin.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          activate(group, pin);
        }
      });

      pins.appendChild(pin);
      active.set(group.label, pin);
    });

    if (groups.length) {
      const first = active.get(groups[0].label);
      if (first) activate(groups[0], first);
    }
  }

  document.querySelectorAll("[data-mentor-map]").forEach(draw);
})();
