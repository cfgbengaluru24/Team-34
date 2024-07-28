from flask import Flask, request, jsonify
from flask_cors import CORS
from langchain.prompts import PromptTemplate
from langchain.llms import HuggingFaceHub
import os

# Load environment variables
# from dotenv import load_dotenv
# load_dotenv()
# HUGGINGFACE_API_KEY = os.getenv("HUGGINGFACE_API_KEY")
HUGGINGFACE_API_KEY = ""  # For demonstration purposes

# Initialize language model from Hugging Face Hub
repo_id = "mistralai/Mistral-7B-Instruct-v0.1"
llm = HuggingFaceHub(
    repo_id=repo_id,
    model_kwargs={"temperature": 0.8, "top_k": 50, "max_length": 500, "max_new_tokens": 150},
    huggingfacehub_api_token=HUGGINGFACE_API_KEY
)

explanations = {
    "communication": """
Communication is how we share information with others. It can be through talking, writing, or even using body language. Good communication helps us understand each other, solve problems, and build strong relationships. Here are some tips for good communication:
- *Listen Carefully:* Pay attention when someone else is speaking.
- *Be Clear:* Use simple and direct words so that others understand you.
- *Be Polite:* Use kind words and be respectful.
""",
    "critical thinking": """
Critical thinking is the ability to think clearly and make good decisions. It means not just accepting what you hear but thinking about it deeply. Critical thinking helps us solve problems, make good choices, and understand the world better. Here are some tips for critical thinking:
- *Ask Questions:* Always be curious and ask questions if you don't understand something.
- *Check Facts:* Make sure the information you have is correct.
- *Think About Different Options:* Consider different ways to solve a problem before deciding.
""",
    "ethics": """
Ethics are the rules that help us know what is right and wrong. They guide our behavior and help us make good choices. Having good ethics means being honest, fair, and respectful to others. Here are some tips for practicing good ethics:
- *Be Honest:* Always tell the truth.
- *Be Fair:* Treat everyone equally and with respect.
- *Be Responsible:* Do what you are supposed to do and take care of others.
""",
    "gender sensitivity": """
Gender sensitivity means understanding and respecting the differences between boys and girls. It helps us treat everyone equally and fairly, no matter their gender. Here are some tips for being gender-sensitive:
- *Respect Everyone:* Treat all people with respect, regardless of their gender.
- *Avoid Stereotypes:* Don't assume someone can or cannot do something based on their gender.
- *Speak Up:* If you see someone being treated unfairly because of their gender, say something.

The CADET Program, managed by the Exchange Participants Association (EXPA) India, is an intensive training initiative aimed at NCC cadets across India. The program's primary goal is to develop confident and articulate cadets by focusing on the 4 Cs: Communication, Creativity, Critical Thinking, and Collaboration. It is conducted in various NCC camps over a two-day period, each day lasting 10 to 12 hours  (The CADET Program)   (The CADET Program) .

The curriculum includes interactive, experiential modules that cover a range of skills:

Communication skills (verbal and nonverbal)
People skills (team-building, leadership, grooming, and etiquette)
Problem-solving skills (decision-making, conflict resolution)
Public speaking (form, content, delivery, body language)
Self-image (understanding self, personal strengths, general confidence)
Thinking skills (fact, opinion, inference, lateral thinking, creative thinking)  (The CADET Program) .
Since its inception in 2015, the CADET Program has expanded significantly. By 2019, it had trained over 6,000 cadets in 28 camps. The program also adapted to online training during the COVID-19 pandemic before returning to physical camps in September 2021  (The CADET Program) .

Trainers in the CADET Program are former NCC cadets who volunteer their time and are certified through the CADET Trainers Orientation Program (C-TOP). The trainers range in age and experience, ensuring a mix of fresh perspectives and seasoned insights  (The CADET Program) .

For more detailed information, you can visit the CADET Program's official website here  (The CADET Program)   (The CADET Program)   (The CADET Program) .
"""
}

class ChatBot:
    def __init__(self):
        self.llm = llm
        self.prompt = PromptTemplate(
            template="""
You are a teacher explaining important concepts to a group of Indian teenagers. Use simple and clear language. Answer in 2 or 3 sentences.

Topic: {topic}

Explanation:
            """,
            input_variables=["topic"]
        )

    def ask(self, topic):
        topic_key = topic.lower().strip()
        if topic_key in explanations:
            return explanations[topic_key]
        else:
            prompt_text = self.prompt.format(topic=topic)
            result = self.llm(prompt_text)
            explanation = result.strip().split("Explanation:\n")[-1].strip()
            return explanation



app = Flask(__name__)
CORS(app)


bot = ChatBot()

@app.route("/ask", methods=["POST"])
def ask():
    data = request.json
    topic = data.get("topic", "")
    result = bot.ask(topic)
    return jsonify({"response": result})

if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000)