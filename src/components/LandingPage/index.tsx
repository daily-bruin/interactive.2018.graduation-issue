import * as React from 'react';
import * as ReactDOM from 'react-dom';
import glamorous, {ThemeProvider} from 'glamorous';
import './landingPage.css';
import { H1 } from 'glamorous';
import NavigationBar from '@/components/NavigationBar';

function LandingPage() {
    return (
        <div id="landingDiv">
            <div id="landingSvg">
                <svg width="20%" height="40%" viewBox="0 0 377 437" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0H65.5" transform="translate(0 20)" stroke="white" strokeWidth="4"/>
                    <path d="M0 0H65.5" transform="translate(311 20)" stroke="white" strokeWidth="4"/>
                    <path d="M0 0H377" transform="translate(0 435)" stroke="white" strokeWidth="4"/>
                    <path d="M0 0H419" transform="translate(2 18) rotate(90)" stroke="white" strokeWidth="4"/>
                    <path d="M0 0H417" transform="translate(375 18) rotate(90)" stroke="white" strokeWidth="4"/>
                    <path d="M2.62672 8H12.1667C14.4467 8 16.4567 8.44 18.1967 9.32C19.9567 10.18 21.3167 11.4 22.2767 12.98C23.2567 14.56 23.7467 16.4 23.7467 18.5C23.7467 20.6 23.2567 22.44 22.2767 24.02C21.3167 25.6 19.9567 26.83 18.1967 27.71C16.4567 28.57 14.4467 29 12.1667 29H2.62672V8ZM11.9267 25.01C14.0267 25.01 15.6967 24.43 16.9367 23.27C18.1967 22.09 18.8267 20.5 18.8267 18.5C18.8267 16.5 18.1967 14.92 16.9367 13.76C15.6967 12.58 14.0267 11.99 11.9267 11.99H7.48672V25.01H11.9267ZM40.9489 24.5H31.1989L29.3389 29H24.3589L33.7189 8H38.5189L47.9089 29H42.8089L40.9489 24.5ZM39.4189 20.81L36.0889 12.77L32.7589 20.81H39.4189ZM50.0877 8H54.9477V29H50.0877V8ZM59.9314 8H64.7914V25.04H75.3214V29H59.9314V8ZM85.9489 21.56V29H81.0889V21.5L72.9589 8H78.1189L83.7289 17.33L89.3389 8H94.1089L85.9489 21.56ZM120.058 18.08C121.258 18.46 122.198 19.1 122.878 20C123.558 20.88 123.898 21.97 123.898 23.27C123.898 25.11 123.178 26.53 121.738 27.53C120.318 28.51 118.238 29 115.498 29H104.638V8H114.898C117.458 8 119.418 8.49 120.778 9.47C122.158 10.45 122.848 11.78 122.848 13.46C122.848 14.48 122.598 15.39 122.098 16.19C121.618 16.99 120.938 17.62 120.058 18.08ZM109.468 11.66V16.61H114.298C115.498 16.61 116.408 16.4 117.028 15.98C117.648 15.56 117.958 14.94 117.958 14.12C117.958 13.3 117.648 12.69 117.028 12.29C116.408 11.87 115.498 11.66 114.298 11.66H109.468ZM115.138 25.34C116.418 25.34 117.378 25.13 118.018 24.71C118.678 24.29 119.008 23.64 119.008 22.76C119.008 21.02 117.718 20.15 115.138 20.15H109.468V25.34H115.138ZM140.958 29L136.908 23.15H136.668H132.438V29H127.578V8H136.668C138.528 8 140.138 8.31 141.498 8.93C142.878 9.55 143.938 10.43 144.678 11.57C145.418 12.71 145.788 14.06 145.788 15.62C145.788 17.18 145.408 18.53 144.648 19.67C143.908 20.79 142.848 21.65 141.468 22.25L146.178 29H140.958ZM140.868 15.62C140.868 14.44 140.488 13.54 139.728 12.92C138.968 12.28 137.858 11.96 136.398 11.96H132.438V19.28H136.398C137.858 19.28 138.968 18.96 139.728 18.32C140.488 17.68 140.868 16.78 140.868 15.62ZM158.968 29.36C155.968 29.36 153.628 28.53 151.948 26.87C150.288 25.21 149.458 22.84 149.458 19.76V8H154.318V19.58C154.318 23.34 155.878 25.22 158.998 25.22C160.518 25.22 161.678 24.77 162.478 23.87C163.278 22.95 163.678 21.52 163.678 19.58V8H168.478V19.76C168.478 22.84 167.638 25.21 165.958 26.87C164.298 28.53 161.968 29.36 158.968 29.36ZM173.281 8H178.141V29H173.281V8ZM202.385 8V29H198.395L187.925 16.25V29H183.125V8H187.145L197.585 20.75V8H202.385Z" transform="translate(86)" fill="white"/>
                    <path d="M105.225 148.269H107.225V146.269H105.225V148.269ZM105.225 177V179H107.225V177H105.225ZM5.49 177H3.49V179H5.49V177ZM5.49 154.308L4.12397 152.847L3.49 153.44V154.308H5.49ZM53.436 109.473L54.8021 110.934L54.8115 110.925L53.436 109.473ZM62.769 98.31L64.5434 99.2327L64.5508 99.2186L64.5579 99.2044L62.769 98.31ZM60.939 79.095L62.2128 77.5531L62.2128 77.5531L60.939 79.095ZM35.502 78.912L36.4403 80.6782L36.45 80.6731L36.4597 80.6678L35.502 78.912ZM25.803 88.062L24.8287 89.8086L26.477 90.7281L27.4903 89.1358L25.803 88.062ZM-1.098 73.056L-2.81076 72.0233L-3.87891 73.7949L-2.07231 74.8026L-1.098 73.056ZM19.947 53.475L19.0145 51.7057L19.0145 51.7057L19.947 53.475ZM77.775 51.096L76.9908 52.9359L77.0015 52.9404L77.775 51.096ZM95.343 64.821L93.6998 65.9612L93.7132 65.9804L93.727 65.9993L95.343 64.821ZM97.173 105.081L95.3772 104.201L95.3735 104.208L95.37 104.216L97.173 105.081ZM79.971 125.943L78.6214 124.467L78.6135 124.474L79.971 125.943ZM55.815 148.269L54.4575 146.8L50.7044 150.269H55.815V148.269ZM103.225 148.269V177H107.225V148.269H103.225ZM105.225 175H5.49V179H105.225V175ZM7.49 177V154.308H3.49V177H7.49ZM6.85603 155.769L54.802 110.934L52.07 108.012L4.12397 152.847L6.85603 155.769ZM54.8115 110.925C59.4953 106.488 62.8014 102.583 64.5434 99.2327L60.9946 97.3873C59.5646 100.137 56.6487 103.674 52.0605 108.021L54.8115 110.925ZM64.5579 99.2044C66.2661 95.7879 67.148 92.3115 67.148 88.794H63.148C63.148 91.6205 62.4439 94.4881 60.9801 97.4156L64.5579 99.2044ZM67.148 88.794C67.148 84.143 65.5463 80.3068 62.2128 77.5531L59.6652 80.6369C61.9437 82.5192 63.148 85.149 63.148 88.794H67.148ZM62.2128 77.5531C58.9123 74.8266 54.2971 73.618 48.678 73.618V77.618C53.7949 77.618 57.3537 78.7274 59.6652 80.6369L62.2128 77.5531ZM48.678 73.618C43.5984 73.618 38.8753 74.7938 34.5443 77.1562L36.4597 80.6678C40.1807 78.6382 44.2416 77.618 48.678 77.618V73.618ZM34.5637 77.1458C30.3303 79.3948 26.8481 82.6945 24.1157 86.9882L27.4903 89.1358C29.8819 85.3775 32.8657 82.5772 36.4403 80.6782L34.5637 77.1458ZM26.7773 86.3154L-0.123689 71.3094L-2.07231 74.8026L24.8287 89.8086L26.7773 86.3154ZM0.614759 74.0887C5.4184 66.1217 12.1558 59.8419 20.8795 55.2443L19.0145 51.7057C9.68216 56.6241 2.3896 63.3983 -2.81076 72.0233L0.614759 74.0887ZM20.8795 55.2443C29.5662 50.6662 39.9081 48.338 51.972 48.338V44.338C39.3919 44.338 28.3838 46.7678 19.0145 51.7057L20.8795 55.2443ZM51.972 48.338C61.5169 48.338 69.8423 49.889 76.9908 52.9358L78.5592 49.2561C70.8237 45.959 61.9471 44.338 51.972 44.338V48.338ZM77.0015 52.9404C84.2605 55.9845 89.7956 60.3345 93.6998 65.9612L96.9862 63.6808C92.5944 57.3515 86.4175 52.5515 78.5485 49.2516L77.0015 52.9404ZM93.727 65.9993C97.7278 71.4861 99.748 77.8979 99.748 85.317H103.748C103.748 77.1201 101.498 69.8679 96.959 63.6427L93.727 65.9993ZM99.748 85.317C99.748 91.967 98.2923 98.2537 95.3772 104.201L98.9688 105.961C102.154 99.4643 103.748 92.575 103.748 85.317H99.748ZM95.37 104.216C92.6045 109.977 87.0875 116.727 78.6215 124.467L81.3205 127.419C89.9345 119.543 95.8856 112.385 98.976 105.946L95.37 104.216ZM78.6135 124.474L54.4575 146.8L57.1725 149.738L81.3285 127.412L78.6135 124.474ZM55.815 150.269H105.225V146.269H55.815V150.269ZM142.86 171.693L143.907 169.989L143.907 169.989L142.86 171.693ZM122.73 148.818L120.92 149.669L120.926 149.682L120.933 149.695L122.73 148.818ZM122.73 77.265L120.928 76.3967L120.924 76.406L122.73 77.265ZM142.86 54.207L143.907 55.9112L143.907 55.9112L142.86 54.207ZM201.237 54.207L200.19 55.9112L200.19 55.9112L201.237 54.207ZM221.184 77.265L219.374 78.1155L219.38 78.1287L219.387 78.1418L221.184 77.265ZM221.184 148.818L219.382 147.95L219.378 147.959L221.184 148.818ZM201.237 171.693L200.19 169.989L200.19 169.989L201.237 171.693ZM186.597 141.132L184.891 140.088L184.885 140.098L186.597 141.132ZM186.597 84.951L184.876 85.9696L184.888 85.9905L184.901 86.011L186.597 84.951ZM157.317 84.951L155.611 83.9067L155.605 83.9168L157.317 84.951ZM157.317 141.132L155.596 142.151L155.608 142.171L155.621 142.192L157.317 141.132ZM172.14 177.562C161.493 177.562 152.102 175.023 143.907 169.989L141.813 173.397C150.698 178.855 160.827 181.562 172.14 181.562V177.562ZM143.907 169.989C135.726 164.963 129.26 157.643 124.528 147.941L120.933 149.695C125.96 160.001 132.914 167.931 141.813 173.397L143.907 169.989ZM124.54 147.967C119.933 138.162 117.593 126.509 117.593 112.95H113.593C113.593 126.963 116.011 139.222 120.92 149.669L124.54 147.967ZM117.593 112.95C117.593 99.3903 119.933 87.8023 124.536 78.124L120.924 76.406C116.011 86.7357 113.593 98.9377 113.593 112.95H117.593ZM124.532 78.1333C129.266 68.3092 135.732 60.9328 143.907 55.9112L141.813 52.5028C132.908 57.9732 125.954 65.9688 120.928 76.3967L124.532 78.1333ZM143.907 55.9112C152.102 50.8769 161.493 48.338 172.14 48.338V44.338C160.827 44.338 150.698 47.0451 141.813 52.5028L143.907 55.9112ZM172.14 48.338C182.66 48.338 191.991 50.8747 200.19 55.9112L202.284 52.5028C193.403 47.0473 183.336 44.338 172.14 44.338V48.338ZM200.19 55.9112C208.36 60.9298 214.762 68.2999 219.374 78.1155L222.994 76.4145C218.09 65.9781 211.194 57.9762 202.284 52.5028L200.19 55.9112ZM219.387 78.1418C224.105 87.8155 226.504 99.397 226.504 112.95H230.504C230.504 98.931 228.023 86.7225 222.982 76.3881L219.387 78.1418ZM226.504 112.95C226.504 126.502 224.106 138.149 219.382 147.95L222.986 149.686C228.022 139.235 230.504 126.97 230.504 112.95H226.504ZM219.378 147.959C214.768 157.652 208.367 164.966 200.19 169.989L202.284 173.397C211.188 167.928 218.084 159.992 222.99 149.677L219.378 147.959ZM200.19 169.989C191.991 175.025 182.66 177.562 172.14 177.562V181.562C183.336 181.562 193.403 178.853 202.284 173.397L200.19 169.989ZM172.14 151.916C179.037 151.916 184.461 148.535 188.309 142.166L184.885 140.098C181.657 145.441 177.444 147.916 172.14 147.916V151.916ZM188.303 142.176C192.257 135.718 194.087 125.868 194.087 112.95H190.087C190.087 125.652 188.257 134.59 184.891 140.088L188.303 142.176ZM194.087 112.95C194.087 100.038 192.259 90.2361 188.293 83.891L184.901 86.011C188.255 91.3779 190.087 100.242 190.087 112.95H194.087ZM188.318 83.9324C184.48 77.4469 179.057 73.984 172.14 73.984V77.984C177.423 77.984 181.638 80.4991 184.876 85.9696L188.318 83.9324ZM172.14 73.984C165.123 73.984 159.58 77.4244 155.611 83.9067L159.023 85.9953C162.374 80.5216 166.713 77.984 172.14 77.984V73.984ZM155.605 83.9168C151.776 90.2543 150.01 100.044 150.01 112.95H154.01C154.01 100.236 155.782 91.3597 159.029 85.9852L155.605 83.9168ZM150.01 112.95C150.01 125.861 151.778 135.7 155.596 142.151L159.038 140.113C155.78 134.608 154.01 125.659 154.01 112.95H150.01ZM155.621 142.192C159.599 148.556 165.143 151.916 172.14 151.916V147.916C166.693 147.916 162.355 145.42 159.013 140.072L155.621 142.192Z" transform="translate(73 27)" fill="white"/>
                    <path d="M66.8 54H68.8V52H66.8V54ZM66.8 194V196H68.8V194H66.8ZM27.2 194H25.2V196H27.2V194ZM27.2 84.6H29.2V82.6H27.2V84.6ZM1.2 84.6H-0.8V86.6H1.2V84.6ZM1.2 54V52H-0.8V54H1.2ZM64.8 54V194H68.8V54H64.8ZM66.8 192H27.2V196H66.8V192ZM29.2 194V84.6H25.2V194H29.2ZM27.2 82.6H1.2V86.6H27.2V82.6ZM3.2 84.6V54H-0.8V84.6H3.2ZM1.2 56H66.8V52H1.2V56ZM198.655 120.2L197.514 118.557L194.937 120.347L197.647 121.928L198.655 120.2ZM213.455 134L211.766 135.071L211.766 135.071L213.455 134ZM211.055 176L212.647 177.21L212.647 177.21L211.055 176ZM189.655 191.4L190.383 193.262L190.383 193.262L189.655 191.4ZM126.055 191.4L125.326 193.262L126.055 191.4ZM104.655 176L106.247 174.79L106.247 174.79L104.655 176ZM102.255 134L100.566 132.929L100.566 132.929L102.255 134ZM117.055 120.2L118.062 121.928L120.772 120.347L118.195 118.557L117.055 120.2ZM105.855 108L104.086 108.934L104.096 108.953L104.106 108.971L105.855 108ZM109.055 70.6L110.646 71.811L110.653 71.8028L110.659 71.7945L109.055 70.6ZM128.655 56.2L127.927 54.3371L127.917 54.341L128.655 56.2ZM186.855 56.2L186.117 58.059L186.127 58.0629L186.855 56.2ZM206.655 70.6L205.051 71.7945L205.057 71.8028L205.063 71.811L206.655 70.6ZM209.655 108L207.906 107.029L207.896 107.047L207.886 107.066L209.655 108ZM145.855 83L147.128 84.5419L147.148 84.5258L147.167 84.5092L145.855 83ZM145.655 104.6L144.309 106.08L144.344 106.112L144.381 106.142L145.655 104.6ZM170.055 104.6L171.328 106.142L171.348 106.126L171.367 106.109L170.055 104.6ZM170.055 83L168.742 84.5092L168.761 84.5258L168.781 84.5419L170.055 83ZM173.055 164.4L174.324 165.945L174.33 165.941L173.055 164.4ZM173.055 139L171.753 140.519L171.782 140.543L171.812 140.567L173.055 139ZM142.455 139L143.724 140.545L143.73 140.541L142.455 139ZM142.455 164.4L141.153 165.919L141.182 165.943L141.212 165.967L142.455 164.4ZM197.647 121.928C203.811 125.523 208.494 129.911 211.766 135.071L215.144 132.929C211.482 127.155 206.299 122.344 199.662 118.472L197.647 121.928ZM211.766 135.071C215.011 140.188 216.655 146.077 216.655 152.8H220.655C220.655 145.39 218.832 138.745 215.144 132.929L211.766 135.071ZM216.655 152.8C216.655 161.187 214.25 168.49 209.462 174.79L212.647 177.21C217.992 170.177 220.655 162.013 220.655 152.8H216.655ZM209.462 174.79C204.655 181.115 197.846 186.047 188.926 189.538L190.383 193.262C199.864 189.553 207.321 184.219 212.647 177.21L209.462 174.79ZM188.926 189.538C180.002 193.029 169.657 194.8 157.855 194.8V198.8C170.052 198.8 180.907 196.971 190.383 193.262L188.926 189.538ZM157.855 194.8C146.052 194.8 135.707 193.029 126.783 189.538L125.326 193.262C134.802 196.971 145.657 198.8 157.855 198.8V194.8ZM126.783 189.538C117.864 186.047 111.054 181.115 106.247 174.79L103.062 177.21C108.389 184.219 115.846 189.553 125.326 193.262L126.783 189.538ZM106.247 174.79C101.459 168.49 99.0547 161.187 99.0547 152.8H95.0547C95.0547 162.013 97.7171 170.177 103.062 177.21L106.247 174.79ZM99.0547 152.8C99.0547 146.077 100.699 140.188 103.944 135.071L100.566 132.929C96.8774 138.745 95.0547 145.39 95.0547 152.8H99.0547ZM103.944 135.071C107.216 129.911 111.899 125.523 118.062 121.928L116.047 118.472C109.411 122.344 104.227 127.155 100.566 132.929L103.944 135.071ZM118.195 118.557C113.63 115.387 110.112 111.544 107.603 107.029L104.106 108.971C106.931 114.056 110.879 118.346 115.914 121.843L118.195 118.557ZM107.623 107.066C105.254 102.577 104.055 97.5683 104.055 92H100.055C100.055 98.165 101.389 103.823 104.086 108.934L107.623 107.066ZM104.055 92C104.055 84.2783 106.26 77.5762 110.646 71.811L107.463 69.389C102.516 75.8905 100.055 83.4551 100.055 92H104.055ZM110.659 71.7945C115.071 65.8696 121.282 61.2773 129.392 58.059L127.917 54.341C119.227 57.7894 112.372 62.7971 107.451 69.4055L110.659 71.7945ZM129.382 58.0629C137.644 54.8359 147.123 53.2 157.855 53.2V49.2C146.719 49.2 136.732 50.8975 127.927 54.3371L129.382 58.0629ZM157.855 53.2C168.587 53.2 177.995 54.8361 186.117 58.059L187.592 54.341C178.914 50.8972 168.989 49.2 157.855 49.2V53.2ZM186.127 58.0629C194.372 61.2838 200.644 65.877 205.051 71.7945L208.259 69.4055C203.332 62.7897 196.404 57.7829 187.582 54.3371L186.127 58.0629ZM205.063 71.811C209.45 77.5762 211.655 84.2783 211.655 92H215.655C215.655 83.4551 213.193 75.8905 208.246 69.389L205.063 71.811ZM211.655 92C211.655 97.5508 210.397 102.546 207.906 107.029L211.403 108.971C214.246 103.854 215.655 98.1826 215.655 92H211.655ZM207.886 107.066C205.513 111.562 202.071 115.392 197.514 118.557L199.795 121.843C204.838 118.341 208.729 114.038 211.423 108.934L207.886 107.066ZM157.855 77C152.547 77 148.047 78.4434 144.542 81.4908L147.167 84.5092C149.796 82.2232 153.296 81 157.855 81V77ZM144.581 81.4581C140.972 84.439 139.255 88.6517 139.255 93.8H143.255C143.255 89.6149 144.604 86.6277 147.128 84.5419L144.581 81.4581ZM139.255 93.8C139.255 98.8076 140.897 102.978 144.309 106.08L147 103.12C144.545 100.889 143.255 97.8591 143.255 93.8H139.255ZM144.381 106.142C147.895 109.045 152.453 110.4 157.855 110.4V106.4C153.123 106.4 149.548 105.222 146.928 103.058L144.381 106.142ZM157.855 110.4C163.256 110.4 167.815 109.045 171.328 106.142L168.781 103.058C166.162 105.222 162.586 106.4 157.855 106.4V110.4ZM171.367 106.109C174.924 103.016 176.655 98.8373 176.655 93.8H172.655C172.655 97.8293 171.319 100.85 168.742 103.091L171.367 106.109ZM176.655 93.8C176.655 88.6517 174.937 84.439 171.328 81.4581L168.781 84.5419C171.306 86.6277 172.655 89.6149 172.655 93.8H176.655ZM171.367 81.4908C167.853 78.4352 163.28 77 157.855 77V81C162.562 81 166.123 82.2315 168.742 84.5092L171.367 81.4908ZM157.855 171C164.566 171 170.131 169.39 174.324 165.945L171.785 162.855C168.511 165.544 163.943 167 157.855 167V171ZM174.33 165.941C178.688 162.334 180.855 157.487 180.855 151.6H176.855C176.855 156.38 175.155 160.066 171.78 162.859L174.33 165.941ZM180.855 151.6C180.855 145.713 178.685 140.913 174.297 137.433L171.812 140.567C175.158 143.22 176.855 146.821 176.855 151.6H180.855ZM174.356 137.481C170.163 133.887 164.585 132.2 157.855 132.2V136.2C163.924 136.2 168.48 137.713 171.753 140.519L174.356 137.481ZM157.855 132.2C151.12 132.2 145.494 133.889 141.18 137.459L143.73 140.541C147.149 137.711 151.789 136.2 157.855 136.2V132.2ZM141.185 137.455C136.938 140.944 134.855 145.739 134.855 151.6H138.855C138.855 146.795 140.505 143.19 143.724 140.545L141.185 137.455ZM134.855 151.6C134.855 157.461 136.936 162.304 141.153 165.919L143.756 162.881C140.507 160.096 138.855 156.405 138.855 151.6H134.855ZM141.212 165.967C145.525 169.388 151.139 171 157.855 171V167C151.771 167 147.117 165.545 143.697 162.833L141.212 165.967Z" transform="translate(79 185)" fill="white"/>
                </svg>
            </div>
            <NavigationBar />
        </div>
    );
};

export default LandingPage;