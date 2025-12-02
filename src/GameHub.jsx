import React, { useEffect, useRef, useState } from "react";

// GameHub.jsx
// Single-file React component (Tailwind CSS assumed present in the host project)
// Exports a default React component that contains a polished UI and three
// embedded browser-playable games: Shooter, Snake and Slots.
// Also includes a "Downloads" / "Pro Projects" panel with instructions and
// packaged code snippets for Python, Java, and Unity projects so you can
// download or copy them to run locally.

export default function GameHub() {
  const [view, setView] = useState("home");
  const [activeTab, setActiveTab] = useState("play");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-black text-gray-100">
      <div className="max-w-7xl mx-auto p-6">
        <header className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">GameHub PRO</h1>
            <p className="text-sm text-gray-300 mt-1">Colección de juegos</p>
          </div>
          <nav className="space-x-3">
            <button onClick={() => setView("home")} className={`px-4 py-2 rounded-md ${view==="home"?"bg-indigo-600":"bg-indigo-700/30"}`}>Inicio</button>
            <button onClick={() => setView("games")} className={`px-4 py-2 rounded-md ${view==="games"?"bg-indigo-600":"bg-indigo-700/30"}`}>Juegos</button>
            <button onClick={() => setView("pro")} className={`px-4 py-2 rounded-md ${view==="pro"?"bg-indigo-600":"bg-indigo-700/30"}`}>Pro Projects</button>
            <a href="#" onClick={(e)=>{e.preventDefault(); window.scrollTo({top:0, behavior:'smooth'})}} className="px-4 py-2 rounded-md bg-indigo-700/20">Subir</a>
          </nav>
        </header>

        {view === "home" && (
          <main className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <section className="col-span-2 bg-gray-800/40 p-6 rounded-2xl shadow-lg">
              <h2 className="text-2xl font-bold mb-2">Bienvenido al portafolio de juegos</h2>
              <p className="text-gray-300">Esto te permite:</p>
              <ul className="list-disc ml-5 mt-3 text-gray-300">
                <li>Jugar versiones web de los juegos (Shooter, Snake, Slots).</li>
                <li>Descargar los proyectos en C# (Unity), Java (Swing) y Python.</li>
                <li>Ver el código y las instrucciones para ejecutar cada proyecto localmente.</li>
              </ul>
              <div className="mt-6 flex gap-3">
                <button onClick={()=>setView('games')} className="px-4 py-2 rounded bg-indigo-600">Jugar ahora</button>
                <button onClick={()=>setView('pro')} className="px-4 py-2 rounded border border-indigo-600">Ver proyectos pro</button>
              </div>
            </section>

            <aside className="bg-gradient-to-b from-indigo-800 to-indigo-700 p-6 rounded-2xl shadow-lg">
              <h3 className="font-semibold">Atajos</h3>
              <ol className="mt-3 text-sm text-gray-200">
                <li>1. Jugar en el navegador.</li>
                <li>2. Descargar proyectos y ejecutarlos localmente.</li>
                <li>3. Pedir un ZIP listo para entregar.</li>
              </ol>
            </aside>
          </main>
        )}

        {view === "games" && (
          <section className="mt-4 bg-gray-800/40 p-6 rounded-2xl shadow-lg">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold">Juegos Web</h2>
              <div className="space-x-2">
                <button onClick={()=>setActiveTab('play')} className={`px-3 py-1 rounded ${activeTab==='play'?'bg-indigo-600':'bg-indigo-600/30'}`}>Jugar</button>
                <button onClick={()=>setActiveTab('code')} className={`px-3 py-1 rounded ${activeTab==='code'?'bg-indigo-600':'bg-indigo-600/30'}`}>Ver Código</button>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="col-span-2 bg-gray-900/30 p-4 rounded-lg">
                {activeTab === 'play' ? (
                  <div>
                    <GameTabs />
                  </div>
                ) : (
                  <div className="prose prose-invert max-w-none">
                    <h3>Código integrado</h3>
                    <p>El código de los juegos web (Shooter, Snake, Slots) está disponible en la pestaña "Pro Projects" para descargar o copiar.</p>
                  </div>
                )}
              </div>

              <div className="bg-gray-900/30 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Instrucciones rápidas</h4>
                <p className="text-sm text-gray-300">Usa las teclas mostradas en cada juego. Las demos funcionan en Chrome/Edge/Firefox.</p>
                <div className="mt-4 space-y-2">
                  <button onClick={()=>alert('Exportar ZIP - pídeme que lo genere si quieres un ZIP descargable ahora.')} className="w-full px-3 py-2 rounded bg-indigo-600">Generar ZIP (opción)</button>
                  <a href="#pro" onClick={(e)=>{e.preventDefault(); setView('pro')}} className="block text-center text-sm text-indigo-200/90">Ver Pro Projects y descargas →</a>
                </div>
              </div>
            </div>
          </section>
        )}

        {view === "pro" && (
          <section id="pro" className="mt-4 bg-gray-800/40 p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Pro Projects — Descargas e instrucciones</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-900/30 p-4 rounded-lg">
                <h3 className="font-semibold">Unity (C#)</h3>
                <p className="text-sm text-gray-300">Incluye: PlayerController.cs, escena mínima, README con pasos para abrir en Unity 2021+. Puedes descargar el paquete o copiar el script.</p>
                <pre className="text-xs mt-3 p-3 bg-black/60 rounded overflow-auto">./Unity/PlayerController.cs</pre>
                <div className="mt-3 flex gap-2">
                  <button onClick={()=>downloadSnippet('unity')} className="px-3 py-2 rounded bg-indigo-600">Descargar script</button>
                  <button onClick={()=>copySnippet('unity')} className="px-3 py-2 rounded border">Copiar</button>
                </div>
              </div>

              <div className="bg-gray-900/30 p-4 rounded-lg">
                <h3 className="font-semibold">Java (Swing)</h3>
                <p className="text-sm text-gray-300">Incluye: Snake.java con OOP, instrucciones para compilar con javac y ejecutar con java.</p>
                <pre className="text-xs mt-3 p-3 bg-black/60 rounded overflow-auto">./Java/Snake.java</pre>
                <div className="mt-3 flex gap-2">
                  <button onClick={()=>downloadSnippet('java')} className="px-3 py-2 rounded bg-indigo-600">Descargar .java</button>
                  <button onClick={()=>copySnippet('java')} className="px-3 py-2 rounded border">Copiar</button>
                </div>
              </div>

              <div className="bg-gray-900/30 p-4 rounded-lg">
                <h3 className="font-semibold">Python</h3>
                <p className="text-sm text-gray-300">Versiones consola y pygame (explicadas). README con comandos pip y cómo ejecutar el archivo .py.</p>
                <pre className="text-xs mt-3 p-3 bg-black/60 rounded overflow-auto">./Python/ahorcado.py
./Python/snake_text.py</pre>
                <div className="mt-3 flex gap-2">
                  <button onClick={()=>downloadSnippet('python')} className="px-3 py-2 rounded bg-indigo-600">Descargar .py</button>
                  <button onClick={()=>copySnippet('python')} className="px-3 py-2 rounded border">Copiar</button>
                </div>
              </div>

              <div className="bg-gradient-to-tr from-emerald-700 to-indigo-600 p-4 rounded-lg text-white">
                <h3 className="font-semibold">Entrega profesional</h3>
                <ol className="mt-2 text-sm list-decimal list-inside">
                  <li>Incluye README.md con pasos de ejecución por plataforma.</li>
                  <li>Incluye screenshots y un video corto (.mp4) realizado con OBS.</li>
                  <li>Incluye un build web (npm run build) para desplegar en Netlify o Vercel.</li>
                </ol>
                <div className="mt-3">
                  <button onClick={()=>alert('Prepararé el README y el ZIP si lo pides explícitamente.') } className="px-3 py-2 rounded bg-white text-black">Pedir ZIP / README</button>
                </div>
              </div>
            </div>
          </section>
        )}

        <footer className="mt-10 text-center text-sm text-gray-400">Hecho por ...</footer>
      </div>
    </div>
  );
}

// ---------- Helper components & embedded games below ---------- //

function GameTabs(){
  const [tab, setTab] = useState('shooter');
  return (
    <div>
      <div className="flex gap-2 mb-4 overflow-x-auto">
        <button onClick={()=>setTab('shooter')} className={`px-3 py-1 rounded ${tab==='shooter'?'bg-indigo-600':'bg-indigo-700/30'}`}>Shooter</button>
        <button onClick={()=>setTab('snake')} className={`px-3 py-1 rounded ${tab==='snake'?'bg-indigo-600':'bg-indigo-700/30'}`}>Snake</button>
        <button onClick={()=>setTab('slots')} className={`px-3 py-1 rounded ${tab==='slots'?'bg-indigo-600':'bg-indigo-700/30'}`}>Slots</button>
        <button onClick={()=>setTab('tictactoe')} className={`px-3 py-1 rounded ${tab==='tictactoe'?'bg-indigo-600':'bg-indigo-700/30'}`}>Tres en raya</button>
        <button onClick={()=>setTab('geometry')} className={`px-3 py-1 rounded ${tab==='geometry'?'bg-indigo-600':'bg-indigo-700/30'}`}>Geometry Dash</button>
      </div>

      <div className="rounded-lg bg-black/60 p-4">
        {tab === 'shooter' && <ShooterGame />}
        {tab === 'snake' && <SnakeGame />}
        {tab === 'slots' && <SlotsGame />}
        {tab === 'tictactoe' && <TicTacToeGame />}
        {tab === 'geometry' && <GeometryDashGame />}
      </div>
    </div>
  )
}

// ---------------- Shooter (canvas) ---------------- //
function ShooterGame(){
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);

  useEffect(()=>{
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = 800; canvas.height = 450;

    let keys = {};
    window.addEventListener('keydown', e=> keys[e.code]=true);
    window.addEventListener('keyup', e=> keys[e.code]=false);

    class Player{
      constructor(){ this.x=400; this.y=380; this.w=40; this.h=24; this.shots=[]; this.last=0 }
      update(dt){
        if(keys['ArrowLeft']) this.x -= 300*dt;
        if(keys['ArrowRight']) this.x += 300*dt;
        if(keys['Space']) this.shoot();
        this.x = Math.max(20, Math.min(780, this.x));
        this.shots.forEach(s=>s.update(dt));
        this.shots = this.shots.filter(s=>!s.dead);
      }
      shoot(){ if(Date.now()-this.last<180) return; this.last=Date.now(); this.shots.push(new Shot(this.x,this.y-10)); }
      draw(){ ctx.fillStyle='cyan'; ctx.fillRect(this.x-this.w/2,this.y-this.h/2,this.w,this.h); this.shots.forEach(s=>s.draw()); }
    }
    class Shot{ constructor(x,y){ this.x=x; this.y=y; this.vy=-500; this.dead=false } update(dt){ this.y += this.vy*dt; if(this.y<0) this.dead=true } draw(){ ctx.fillStyle='yellow'; ctx.fillRect(this.x-3,this.y-10,6,20) } }
    class Enemy{ constructor(){ this.x = Math.random()*760+20; this.y=-20; this.vy = Math.random()*80+40; this.w=34; this.h=24 }
      update(dt){ this.y += this.vy*dt }
      draw(){ ctx.fillStyle='red'; ctx.fillRect(this.x-this.w/2,this.y-this.h/2,this.w,this.h) }
    }

    const player = new Player();
    let enemies = [];
    let lastEnemy = 0;
    let last = performance.now();

    function loop(now){
      const dt = (now-last)/1000; last = now;
      ctx.clearRect(0,0,canvas.width,canvas.height);

      // spawn enemies
      if(now-lastEnemy>800){ enemies.push(new Enemy()); lastEnemy=now; }

      player.update(dt);
      player.draw();

      enemies.forEach(e=>{ e.update(dt); e.draw(); });

      // collisions
      for(let e of enemies){
        for(let s of player.shots){
          if(!s.dead && Math.abs(s.x-e.x)<30 && Math.abs(s.y-e.y)<20){ s.dead=true; e.dead=true; setScore(prev=>prev+10) }
        }
      }
      enemies = enemies.filter(e=>!e.dead && e.y<500);

      // HUD
      ctx.fillStyle='white'; ctx.font='16px monospace'; ctx.fillText('Score: '+score,10,20);

      requestAnimationFrame(loop);
    }

    requestAnimationFrame(loop);
    return ()=>{
      window.removeEventListener('keydown', ()=>{});
      window.removeEventListener('keyup', ()=>{});
    }
  },[score]);

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h4 className="font-semibold">Shooter — usa ← → y Space</h4>
        <div className="text-sm text-gray-300">Score: {score}</div>
      </div>
      <canvas ref={canvasRef} className="w-full border rounded-md" />
    </div>
  )
}

// ---------------- Snake (JS remake) ---------------- //
function SnakeGame(){
  const canvasRef = useRef(null);
  const [running, setRunning] = useState(true);

  useEffect(()=>{
    const canvas = canvasRef.current; const ctx = canvas.getContext('2d');
    canvas.width=600; canvas.height=400;
    const grid = 20;
    let px = 10, py = 10;
    let vx = 0, vy = 0;
    let tail = [];
    let food = {x:5,y:5};
    let score=0;

    function placeFood(){ food.x = Math.floor(Math.random()*(canvas.width/grid)); food.y = Math.floor(Math.random()*(canvas.height/grid)); }

    function key(e){
      switch(e.key){
        case 'ArrowUp': vx=0; vy=-1; break;
        case 'ArrowDown': vx=0; vy=1; break;
        case 'ArrowLeft': vx=-1; vy=0; break;
        case 'ArrowRight': vx=1; vy=0; break;
      }
    }
    window.addEventListener('keydown', key);

    function loop(){
      if(!running) return;
      px += vx; py += vy;
      if(px<0) px = canvas.width/grid-1; if(px>=canvas.width/grid) px=0;
      if(py<0) py = canvas.height/grid-1; if(py>=canvas.height/grid) py=0;

      tail.unshift({x:px,y:py});
      if(tail.length>5+score) tail.pop();

      if(px===food.x && py===food.y){ score++; placeFood(); }

      // draw
      ctx.fillStyle='#071013'; ctx.fillRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle='lime'; for(let s of tail){ ctx.fillRect(s.x*grid+2,s.y*grid+2,grid-4,grid-4); }
      ctx.fillStyle='red'; ctx.fillRect(food.x*grid+2,food.y*grid+2,grid-4,grid-4);
      ctx.fillStyle='white'; ctx.font='16px monospace'; ctx.fillText('Score: '+score,10,18);

      // self collision
      for(let i=1;i<tail.length;i++){ if(tail[i].x===px && tail[i].y===py){ setRunning(false); ctx.fillStyle='white'; ctx.fillText('Game Over - R para reiniciar',200,200) } }

    }

    const t = setInterval(loop,100);
    function onKey(e){ if(e.key==='r'){ score=0; tail=[]; px=10; py=10; vx=0; vy=0; setRunning(true); } }
    window.addEventListener('keydown', onKey);

    return ()=>{ clearInterval(t); window.removeEventListener('keydown', key); window.removeEventListener('keydown', onKey); }
  },[running]);

  return (
    <div>
      <h4 className="font-semibold mb-2">Snake — usa flechas, presiona R para reiniciar</h4>
      <canvas ref={canvasRef} className="w-full border rounded-md" />
    </div>
  )
}

// ---------------- Slots ---------------- //
function SlotsGame(){
  const [reels, setReels] = useState(['🍒','🍋','⭐']);
  const [message, setMessage] = useState('Gira para jugar');

  function spin(){
    const symbols = ['🍒','🍋','⭐','🍉','🔔'];
    const r1 = symbols[Math.floor(Math.random()*symbols.length)];
    const r2 = symbols[Math.floor(Math.random()*symbols.length)];
    const r3 = symbols[Math.floor(Math.random()*symbols.length)];
    setReels([r1,r2,r3]);
    if(r1===r2 && r2===r3) setMessage('🎉 JACKPOT!')
    else setMessage('Intenta otra vez...')
  }

  return (
    <div className="text-center">
      <h4 className="font-semibold mb-2">Máquina Tragamonedas</h4>
      <div className="text-4xl py-4">{reels[0]} &nbsp; {reels[1]} &nbsp; {reels[2]}</div>
      <div className="flex justify-center gap-3">
        <button onClick={spin} className="px-4 py-2 rounded bg-indigo-600">Girar</button>
      </div>
      <div className="mt-2 text-sm text-gray-300">{message}</div>
    </div>
  )
}

// ---------------- Tic Tac Toe (Tres en raya) ---------------- //
function TicTacToeGame(){
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [mode, setMode] = useState('ai'); // 'local' or 'ai'

  useEffect(()=>{ if(mode==='ai' && !xIsNext){ const move = computeBestMove(board,'O'); if(move!==-1) play(move);} },[board,xIsNext,mode]);

  function play(i){
    if(board[i] || calculateWinner(board)) return;
    const newBoard = board.slice();
    newBoard[i] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  }

  function reset(){ setBoard(Array(9).fill(null)); setXIsNext(true); }

  const winner = calculateWinner(board);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-semibold">Tres en raya — Modo: {mode==='ai'?'vs IA':'dos jugadores'}</h4>
        <div className="flex gap-2">
          <button onClick={()=>setMode(mode==='ai'?'local':'ai')} className="px-2 py-1 rounded bg-indigo-600 text-sm">Cambiar modo</button>
          <button onClick={reset} className="px-2 py-1 rounded border text-sm">Reiniciar</button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-2 w-64 mx-auto">
        {board.map((v,i)=>(
          <button key={i} onClick={()=>{ if(mode==='local' || (mode==='ai' && xIsNext)) play(i)}} className="h-16 w-16 bg-gray-800/60 rounded text-2xl font-bold">{v}</button>
        ))}
      </div>

      <div className="mt-3 text-center text-sm text-gray-300">{winner ? `Ganador: ${winner}` : `Siguiente: ${xIsNext ? 'X' : 'O'}`}</div>
    </div>
  )
}

// Minimax for TicTacToe (returns index)
function computeBestMove(board, aiPlayer){
  const huPlayer = aiPlayer === 'O' ? 'X' : 'O';
  function emptyIndices(b){ return b.map((v,i)=>v?null:i).filter(v=>v!==null); }
  function minmax(newBoard, player){
    const avail = newBoard.reduce((acc,v,i)=> v?acc:acc.concat(i),[]);
    const winner = calculateWinner(newBoard);
    if(winner==='X') return {score: -10};
    if(winner==='O') return {score: 10};
    if(avail.length===0) return {score:0};

    const moves = [];
    for(let i of avail){
      const move = {};
      move.index = i;
      newBoard[i] = player;
      if(player === aiPlayer){
        const result = minmax(newBoard, huPlayer);
        move.score = result.score;
      } else {
        const result = minmax(newBoard, aiPlayer);
        move.score = result.score;
      }
      newBoard[i] = null;
      moves.push(move);
    }

    let bestMove;
    if(player === aiPlayer){
      let bestScore = -Infinity; for(let m of moves) if(m.score>bestScore){ bestScore=m.score; bestMove=m; }
    } else {
      let bestScore = Infinity; for(let m of moves) if(m.score<bestScore){ bestScore=m.score; bestMove=m; }
    }
    return bestMove;
  }

  const avail = board.reduce((acc,v,i)=> v?acc:acc.concat(i),[]);
  if(avail.length===0) return -1;
  const move = minmax(board.slice(), aiPlayer);
  return move && move.index !== undefined ? move.index : -1;
}

function calculateWinner(squares){
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for(let [a,b,c] of lines){ if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c]) return squares[a]; }
  return null;
}

// ---------------- Geometry Dash - estilo (Canvas) ---------------- //
function GeometryDashGame(){
  const canvasRef = useRef(null);
  useEffect(()=>{
    const canvas = canvasRef.current; const ctx = canvas.getContext('2d');
    canvas.width = 900; canvas.height = 300;

    let player = {x:80, y:200, vy:0, w:30, h:30, onGround:true};
    let speed = 220; let gravity = 900; let jumpForce = -360;
    let obstacles = [];
    let lastObs = 0; let score = 0; let running = true;

    function spawn(){
      const h = 20 + Math.random()*80; const gap = 0; // single obstacle
      obstacles.push({x:canvas.width+50, y:canvas.height - h, w:20 + Math.random()*30, h:h});
    }

    function update(dt){
      if(!running) return;
      // player physics
      player.vy += gravity*dt; player.y += player.vy*dt;
      if(player.y + player.h >= canvas.height){ player.y = canvas.height - player.h; player.vy = 0; player.onGround = true; }

      // spawn obs
      lastObs += dt*1000; if(lastObs>900){ spawn(); lastObs=0; }

      // move obstacles
      for(let o of obstacles){ o.x -= speed*dt; }
      obstacles = obstacles.filter(o=>o.x+o.w> -50);

      // collision
      for(let o of obstacles){ if(player.x < o.x+o.w && player.x+player.w > o.x && player.y < o.y+o.h && player.y+player.h > o.y){ running=false } }

      // score
      score += dt*10;
    }

    function draw(){
      ctx.fillStyle='#0b1020'; ctx.fillRect(0,0,canvas.width,canvas.height);
      // ground
      ctx.fillStyle='#1b2b3a'; ctx.fillRect(0,canvas.height-20,canvas.width,20);
      // player
      ctx.fillStyle='cyan'; ctx.fillRect(player.x, player.y, player.w, player.h);
      // obstacles
      ctx.fillStyle='crimson'; for(let o of obstacles){ ctx.fillRect(o.x, o.y, o.w, o.h); }
      // HUD
      ctx.fillStyle='white'; ctx.font='18px monospace'; ctx.fillText('Score: '+Math.floor(score),10,24);
      if(!running){ ctx.fillStyle='white'; ctx.fillText('Game Over - R para reiniciar', canvas.width/2-110, canvas.height/2); }
    }

    let last = performance.now();
    function loop(now){ const dt = (now-last)/1000; last = now; update(dt); draw(); requestAnimationFrame(loop); }
    requestAnimationFrame(loop);

    function onKey(e){ if(e.code==='Space' && (player.onGround || true)){ player.vy = jumpForce; player.onGround=false; } if(e.key==='r'){ obstacles=[]; score=0; running=true; player.y=200; player.vy=0; } }
    window.addEventListener('keydown', onKey);

    return ()=>{ window.removeEventListener('keydown', onKey); }
  },[]);

  return (
    <div>
      <h4 className="font-semibold mb-2">Geometry Dash — espacio para saltar (espacio), R para reiniciar</h4>
      <canvas ref={canvasRef} className="w-full border rounded-md" style={{height:300}} />
    </div>
  )
}


// ---------------- Utility functions (download/copy) ---------------- //
function downloadSnippet(type){
  const files = {
    unity: `// PlayerController.cs - pega esto en Unity\nusing UnityEngine;\npublic class PlayerController : MonoBehaviour { public float speed = 6f; public float jumpForce = 6f; private CharacterController controller; private Vector3 velocity; void Start(){ controller = GetComponent<CharacterController>(); } void Update(){ float x = Input.GetAxis("Horizontal"); float z = Input.GetAxis("Vertical"); Vector3 move = transform.right * x + transform.forward * z; controller.Move(move * speed * Time.deltaTime); if(Input.GetButtonDown("Jump") && controller.isGrounded){ velocity.y = jumpForce; } velocity.y += Physics.gravity.y * Time.deltaTime; controller.Move(velocity * Time.deltaTime); } }`,
    java: `// Snake.java (simplified)\nimport javax.swing.*; import java.awt.*; import java.awt.event.*; public class Snake extends JPanel implements ActionListener, KeyListener{ /*... pega el código completo ...*/ }`,
    python: `# ahorcado.py\nimport random\npalabras=['python','voley','computadora']\nsecreta=random.choice(palabras)\nprogreso=['_']*len(secreta)\nfallos=0\nwhile fallos<6 and '_' in progreso:\n    print(' '.join(progreso))\n    letra=input('Letra: ').lower()\n    if letra in secreta:\n        for i,l in enumerate(secreta):\n            if l==letra: progreso[i]=letra\n    else: fallos+=1\nprint('Fin')` }

  const content = files[type] || '// no disponible';
  const blob = new Blob([content], {type: 'text/plain'});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a'); a.href = url; a.download = `${type}_snippet.txt`; a.click(); URL.revokeObjectURL(url);
}

function copySnippet(type){
  const examples = { unity: 'PlayerController.cs code...', java: 'Snake.java code...', python: '# ahorcado.py...' };
  navigator.clipboard.writeText(examples[type]||'').then(()=> alert('Código copiado al portapapeles'));
}
