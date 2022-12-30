it("Shows an autocomplete !", () => {
  createAutoComplete({
    root: document.querySelector("#target"),
    fetchData() {
      return [
        { Title: "The Avengers" },
        { Title: "Avengers End Game" },
        { Title: "Thor" },
      ];
    },

    renderOption(movie) {
      return movie.Title;
    },
  });

  const dropdown = document.querySelector(".dropdown");
});
