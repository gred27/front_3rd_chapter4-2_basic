# 바닐라 JS 프로젝트 성능 개선

- 프로젝트 URL : https://d2akhv1fzc4cv1.cloudfront.net/

## 성능 개선 필요성

- 성능 측정 결과 전반적으로 성능이 좋지 않음을 확인
- 특히 큰 사이즈의 이미지가 로딩되며 cls, lcp 점수에 악영향을 주고있음.

## 개선 전 성능

### Page Speed 성능 측정 결과

https://pagespeed.web.dev/analysis/https-d2akhv1fzc4cv1-cloudfront-net/sdprlg5xsd?form_factor=desktop

![alt asis](/docs/asis.png)

### lhci를 사용한 Lighthout 측정결과

#### 🎯 Lighthouse 점수

| 카테고리       | 점수 | 상태 |
| -------------- | ---- | ---- |
| Performance    | 72%  | 🟠   |
| Accessibility  | 82%  | 🟠   |
| Best Practices | 75%  | 🟠   |
| SEO            | 82%  | 🟠   |
| PWA            | 0%   | 🔴   |

#### 📊 Core Web Vitals (2024)

| 메트릭 | 설명                      | 측정값 | 상태 |
| ------ | ------------------------- | ------ | ---- |
| LCP    | Largest Contentful Paint  | 14.63s | 🔴   |
| INP    | Interaction to Next Paint | N/A    | 🟢   |
| CLS    | Cumulative Layout Shift   | 0.011  | 🟢   |

## 성능 개선 방향

### 최초 리소스 로딩 시간 축소

1. 이미지 사이즈 축소 및 webp 로 변경
2. js script body 하단으로 이동
3. script defer 적용
4. image lazy load 속성 추가 및 content-visibility css 속성 적용

### 레이아웃 shift 최소화

1. layout shift를 발생시키는 css 수정

### seo

1. meta tag 추가
2. favicon 추가

## 개선 후 성능

### Page Speed 성능 측정 결과

https://pagespeed.web.dev/analysis/https-d2akhv1fzc4cv1-cloudfront-net/s4mjdfkpsx?form_factor=desktop

![alt tobe](/docs/tobe.png)

### lhci를 사용한 Lighthout 측정결과

#### 🎯 Lighthouse 점수

| 카테고리       | 점수 | 상태 |
| -------------- | ---- | ---- |
| Performance    | 100% | 🟢   |
| Accessibility  | 89%  | 🟠   |
| Best Practices | 75%  | 🟠   |
| SEO            | 91%  | 🟢   |
| PWA            | 0%   | 🔴   |

#### 📊 Core Web Vitals (2024)

| 메트릭 | 설명                      | 측정값 | 상태 |
| ------ | ------------------------- | ------ | ---- |
| LCP    | Largest Contentful Paint  | 1.80s  | 🟢   |
| INP    | Interaction to Next Paint | N/A    | 🟢   |
| CLS    | Cumulative Layout Shift   | 0.001  | 🟢   |

## 결과

- 이미지 크기의 최적화와 script 로딩 개선으로 FCP, LCP 점수 대폭 감소
- meta tag, img alt 값 추가로 접근성 점수 개선
- cls 최소화

### Page Speed 성능 측정 기준

| 카테고리                | as-is | to-be | 증감    |
| ----------------------- | ----- | ----- | ------- |
| First Contentful Paint  | 0.9s  | 0.3s  | -66.7%  |
| Lagest Contentful Paint | 3.4s  | 0.8s  | -76.47% |
| Total Blocking Time     | 200ms | 150ms | -25%    |
| Cumulative Layout Shift | 0.477 | 0.003 | -99.37% |

### Lighthouse score 기준

| 카테고리       | as-is | to-be | 증감  |
| -------------- | ----- | ----- | ----- |
| Performance    | 72%   | 100%  | +38%p |
| Accessibility  | 82%   | 89%   | +7%p  |
| Best Practices | 75%   | 75%   | +0%p  |
| SEO            | 82%   | 91%   | +9%p  |
