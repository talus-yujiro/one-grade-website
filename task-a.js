// Supabase ライブラリから `createClient` をインポート
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

// Supabase の設定
const supabaseUrl = "https://mgsbwkidyxmicbacqeeh.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1nc2J3a2lkeXhtaWNiYWNxZWVoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzk5NDA0MjIsImV4cCI6MjA1NTUxNjQyMn0.fNkFQykD9ezBirtJM_fOB7XEIlGU1ZFoejCgrYObElg";

const supabase = createClient(supabaseUrl, supabaseKey);

// フォーム送信処理
document.getElementById("taskForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const title = document.getElementById("title").value;
    const deadline = document.getElementById("deadline").value;
    const notes = document.getElementById("notes").value;

    const { error } = await supabase.from("tasks").insert([{ title, deadline, notes }]);

    if (error) {
        console.error("データ送信エラー:", error);
        return;
    }

    document.getElementById("taskForm").reset();
    loadTasks();
});

// Supabase からデータを取得して表に表示
async function loadTasks() {
    const { data, error } = await supabase
        .from("tasks")
        .select("*")
        .order("deadline", { ascending: true });

    if (error) {
        console.error("データ取得エラー:", error);
        return;
    }

    const tableBody = document.getElementById("taskTable");
    tableBody.innerHTML = "";
    data.forEach((task) => {
        const row = `<tr>
            <td>${task.title}</td>
            <td>${task.deadline}</td>
            <td>${task.notes}</td>
        </tr>`;
        tableBody.innerHTML += row;
    });
}

loadTasks();
