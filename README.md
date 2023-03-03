# FutureMakers-2022-Team-Deep-Green
<br />
demo vid: https://youtu.be/AYg5c1oWT70
<br />
presentation slides: https://docs.google.com/presentation/d/1esHzIkhQU3q1IiMVxXHA-2j6345qE00jEHyFUNGvGUo/edit?usp=sharing

Over a two week sprint, we created a convolutional autoencoder that predicts next day wildfire activity. As I worked on the backend, more specifically the model prototyping, the rest of our team focused on the frontend and presentation side of things. Here's a brief overview of my work.

## The Problem

Wildfires are a serious issue across the United States. Burning millions of acres of land every day, it is essential to develop the right prediction tools to combat them. The issue for most wildfire prediction tools is that oftentimes, they are outdated and take quite a long time to run. 

Our next day 24 hour, lightweight model provides a solution. 

## Understanding the Data

We used the dataset [here](https://www.kaggle.com/datasets/fantineh/next-day-wildfire-spread), which takes in factors, such as temperature, wind speed, and vegetation.

![image](https://user-images.githubusercontent.com/60068580/222832490-4cf86cb7-ce47-49cd-8d14-e0d047f38510.png)


## The Model

Our model is a convolutional autoencoder, which takes in the initial features and compresses them down, extracting the patterns that the model's training makes obvious. Then, it expands the features out into a 32 by 32 pixel image to represent the predicted fire mask. Our model reached over 90% accuracy on the classification. In fact, its accuracy on the validation and testing data shows that it can outline the fire's mask, providing a powerful insight into where firefighting efforts should concentrate on the most.

![image](https://user-images.githubusercontent.com/60068580/222831916-ba6ad743-2a85-463e-941b-de06c1196f15.png)

## Resources
For further exploration, check these out:
 - [Research Paper](https://arxiv.org/pdf/2112.02447.pdf)
 - [More on Convolutional Autoencoders](http://users.cecs.anu.edu.au/~Tom.Gedeon/conf/ABCs2018/paper/ABCs2018_paper_58.pdf)

