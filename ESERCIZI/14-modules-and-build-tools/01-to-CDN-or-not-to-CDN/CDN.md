## Author Details

* Name: Gabriele Speciale
* Date: 2024-07-10
* Concat: gabriele.speciale@edu.itspiemonte.it

## Description
Find sources similar to this article to understand the pros and cons of a CDN

    ● Write down as many pros and cons as you can think of
     ○ Explain why you think they are relevant

    ● Describe 2 scenarios where you think a CDN is required and 2 where it’s not
     ○ Your examples should be realistic and should emphasize the pros or cons
    
    ● Summarize your findings in a properl named markdown file 
     ○ Markdown Guide
     ○ Online Markdown Editor - Dillinger

## Sources
- [Stack Overflow](https://stackoverflow.com/questions/2145277/what-are-the-advantages-and-disadvantages-of-using-a-content-delivery-network-c)
- [StormIT](https://www.stormit.cloud/blog/what-is-cdn/)
- [Colocation America](https://www.colocationamerica.com/blog/cdn-advantages-and-disadvantages)


<br> <br> <br>



# Pros and Cons of a Content Delivery Network (CDN)

A Content Delivery Network (CDN) is a geographically distributed network of servers that work together to deliver web content more efficiently to users. These servers cache already delivered content, reducing latency and improving performance.

<br>

## Pros of a CDN

#### `Improved loading times`
Thanks to the cache on distributed servers, content is delivered from a server closer to the user, reducing page load times. This improves user experience, increases time spent on the site, and favors better search engine indexing. For users far from the main server, the difference can be significant.

#### `Less load on the origin server`
A CDN distributes part of the traffic to different servers, reducing the load on the main server. This helps prevent overloads and ensures greater stability, especially during traffic spikes.

#### `Higher reliability`
If one of the CDN servers goes offline, traffic is routed to another functioning server, reducing the risk of downtime and ensuring that the site remains accessible even in the event of technical problems.

#### `Protection against DDoS attacks`
Many CDNs offer protection against DDoS attacks, blocking malicious traffic before it reaches the origin server and causes disruptive service interruptions.

#### `Scalability`
During events or promotions that attract many users, CDNs can handle sudden traffic spikes without issues, thanks to their distributed network.

#### `Global accessibility`
CDNs improve content delivery speed globally, ensuring that users from anywhere in the world can quickly access the site and browse smoothly.

<br> <br>

## Cons of a CDN

#### `Cost`
CDNs can be expensive, especially for small businesses or sites with limited budgets and low traffic.

#### `Technical complexity`
Implementing and managing a CDN requires technical expertise. Incorrect configuration can lead to several issues, such as the inability to update content properly.

#### `Cache issues`
Content cached on a CDN may not update immediately, creating a delay in displaying updates (especially for sites that require real-time updates, such as news platforms or online stores).

#### `Dependence on external providers`
Using a CDN means relying on third-party providers for content delivery. If they have technical problems, your site could suffer.

#### `Unnecessary for local audience sites`
If a site's audience is concentrated in a single geographic area, a CDN doesn't offer great benefits. A well-configured local server is a good alternative that can provide adequate performance without the costs and complexity of a CDN.

<br> <br> <br>

## When a CDN is necessary

### **International e-commerce platform**
If you run an online store with customers worldwide, it's essential that pages load quickly everywhere. Using a CDN ensures consistent loading times across all geographic areas.

### **Video streaming service**
For a streaming service, a CDN is indispensable for delivering high-bandwidth video content without buffering. Without a CDN, users may experience loading problems and poor quality.

<br> <br>

## When a CDN is not necessary

### **Small local business website**
If you own a website for a small business serving only a local clientele, you don't need a CDN. Using a server close to the local audience is one of the best solutions.

### **Personal blog with low traffic**
For managing a personal blog or site with few visitors, a CDN is not necessary. The traffic volume doesn't justify the costs and complexity of implementation.