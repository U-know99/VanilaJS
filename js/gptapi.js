const apiKey = "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";

document
  .getElementById("generateButton")
  .addEventListener("click", async () => {
    // 입력 상자에서 프롬프트 텍스트를 가져옵니다.
    const prompt = document.getElementById("promptInput").value;

    // 로딩 이미지를 표시하고 결과를 초기화합니다.
    document.getElementById("loadingImage").style.display = "block";
    document.getElementById("output").textContent = "";

    // OpenAI API에 POST 요청을 보냅니다.
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`, // API 키를 헤더에 포함
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: prompt }],
        temperature: 0.7,
      }),
    });

    // API 응답을 JSON 형식으로 파싱하고 데이터 추출
    const data = await response.json();
    console.log(data);

    // 로딩 이미지를 숨기고 결과를 출력
    document.getElementById("loadingImage").style.display = "none";
    const generatedText = data.choices[0].message.content;
    console.log(generatedText);
    document.getElementById("output").textContent = generatedText;
  });
