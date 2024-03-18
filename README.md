<p align="center">
    <img src="img/air.png" width="70%">
</p>

<p align="center">Procurando uma viagem<br>econômica e divertida?<br>Voe conosco!</p>

# Overview

<p>A AIR, abreviação para Airline Information Resource (Recurso de informações de companhias aéreas), é muito mais do que apenas mais uma plataforma de reservas de voos. Fundada com a visão de simplificar e aprimorar o planejamento de viagens aéreas para todos os tipos de viajantes, a AIR representa uma abordagem inovadora para a reserva de voos, prezando pela experiência do usuário.</p>
    
<ul>
    <li>Transformação da Experiência de Reserva de Voos: O projeto da AIR está revolucionando a forma como as pessoas reservam voos, oferecendo uma plataforma centrada no usuário e focada na personalização. Ao utilizar tecnologias avançadas, como web scraping e inteligência artificial, estamos proporcionando aos usuários uma experiência de reserva de voos mais intuitiva e eficiente.</li>

<li>Acessibilidade e Personalização: A AIR está comprometida em tornar a reserva de voos acessível a todos os viajantes, independentemente de seu orçamento ou preferências de viagem. Ao oferecer recomendações de voos altamente personalizadas e uma ampla gama de recursos exclusivos, estamos tornando o processo de reserva de voos mais conveniente e satisfatório para todos os usuários.</li>

<li>Inovação e Qualidade de Serviço: Nossa plataforma se destaca pela inovação e excelência em tudo o que fazemos. Com uma equipe dedicada e uma paixão por viagens, estamos constantemente buscando formas de melhorar e aprimorar a experiência do usuário, oferecendo um serviço de alta qualidade e mantendo os mais altos padrões de conduta em todas as nossas operações.</li>
</ul>


# Objetivo

<p>O objetivo central do AIR é transformar o processo de reserva de voos em uma experiência acessível, personalizada e altamente satisfatória para os usuários. A missão da plataforma vai além de simplesmente oferecer uma lista de opções de voos; ela se propõe a simplificar toda a jornada do usuário, desde a pesquisa inicial até a finalização da reserva, proporcionando uma experiência completa e centrada no usuário.</p>

<hr>

# Diagrama com a rota de Cadastro e Login do Usuário

```mermaid
sequenceDiagram
    Participant User as User
    Participant Frontend as Frontend
    Participant Backend as Backend

    User->>Frontend: Access Home Page
    Frontend->>Backend: POST /consult-travel
    Backend-->>Frontend: Return best routes
    Frontend-->>User: Display best routes
    User->>Frontend: Create an account
    Frontend->>Backend: POST /create-account
    Backend-->>Frontend: Account created
    User->>Frontend: Login
    Frontend->>Backend: POST /login
    Backend-->>Frontend: Login successful
    Frontend-->>User: Access Dashboard
```

# Diagrama ilustrando a interação com o ChatBot

```mermaid
sequenceDiagram
    Participant User as User
    Participant Frontend as Frontend
    Participant Backend as Backend

    User->>Frontend: Access Chat-bot
    Frontend->>Backend: GET /chat-bot
    Backend-->>Frontend: Return Chat-bot Interface
    Frontend-->>User: Display Chat-bot Interface
    User->>Frontend: Enter Question
    Frontend->>Backend: POST /submit-question
    Backend-->>Frontend: Return Answer
    Frontend-->>User: Display Answer
```
