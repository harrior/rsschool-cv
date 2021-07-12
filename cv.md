# Sizov Sergey  
## Contacts:  
**E-Mail** harrior@gmail.com  
**Telegram** @harrior  
[LinkedIn](https://www.linkedin.com/in/sbsizov/)  

## Brief information  
I want to become a  professional full stack Web-Developer and probably System-Architect.  
I have more than 10 years of experience in system and network administration.  
I have been carrying out commercial orders for the development of small applications for automation of business processes.  

## Skills\Technologies\Tools  
My main language is *Python 3.7 and higher*.  
**Frameworks and technologies by directions:**  
Web - Django (and HTML5\CSS3 of course).  
Scrapping and testing - requests\Selenium\BeautifulSoup4\unittest.  
ML - numpy, pandas, Scikit-learn.  
TG bots - aiogram.  

Databases MySQL, SQLite (know SQL).  
Git.  
VSCode and PyCharm as IDEs  
Follow to TDD methodology.  

*Now I'm studying JS, TS and Node.js in RS School. :)*  

## Samples of code.  
This is my solve of [that](https://www.codewars.com/kata/5235c913397cbf2508000048) 3 Ku task.  
This is a realisation of Calculator with RPN. (*I know code needs refactor and I'll make it once :(* )  
```
class Calculator(object):
    OPERATIONS = {'+': 1, '-': 1, '*': 2, '/': 2, '(': 0, ')': 0, '^':3}
    NUMBERS = '1234567890.'
    
	def split_str(self, string):
        operands = []
        s = []
        for i in string+' ':
            if i in self.NUMBERS:
                s.append(i)
            else:
                if len(s) > 0:
                    operands.append(float(''.join(s)))
                    s.clear()
                if i in self.OPERATIONS:
                    operands.append(i)
        return operands

    def make_rpn(self, operands):
        result_list = []
        stack = []
        for i in operands:
            if isinstance(i, float):
                result_list.append(i)
            elif i == '(':
                stack.append(i)
            elif i == ')':
                j = stack.pop()
                while (j != '('): #парность скобок?
                    result_list.append(j)
                    j = stack.pop()
            elif i in self.OPERATIONS:
                while len(stack) > 0 and self.OPERATIONS[stack[-1]] >= self.OPERATIONS[i]:
                    result_list.append(stack.pop())
                stack.append(i)
        else:
            while len(stack) > 0:
                result_list.append(stack.pop())
        return result_list

    def evaluate_expression(self,operate, param1, param2):
        if operate == '+':
            return param1 + param2
        elif operate == '-':
            return param1 - param2
        elif operate == '*':
            return param1 * param2
        elif operate == '/':
            return param1 / param2
        elif operate == '^':
            return param1 ** param2

    def evaluate_rpn(self, rpn):
        while len(rpn)>1:
            for i, v in enumerate(rpn):
                if v in self.OPERATIONS:
                    param1 = rpn.pop(i-2)
                    param2 = rpn.pop(i-2)
                    oper = rpn.pop(i-2)
                    rpn.insert(i-2, self.evaluate_expression(oper,param1,param2))
                    break
        return rpn[-1] if abs(rpn[-1] - int(rpn[-1])) > 0 else int(rpn[-1])

    def evaluate(self, string):
        operands = self.split_str(string)
        rpn = self.make_rpn(operands)
        return self.evaluate_rpn(rpn)


if __name__ == '__main__':
    print(Calculator().evaluate("2 + 3 * 4 / 3 - 6 / 3 * 3 + 8"))
```

I have fourth Ku at the Codewars https://www.codewars.com/users/harrior  

## Work experience  
Since 2017 I have developed applications to automate the business tasks of my clients.  
Since 2008 I have been dealing with system and network administration as well as information security.  
I am able to configure Windows and Linux servers, design and install computer networks.  
I have experience in practical information security.  

*My favorite little projects:*  
* https://github.com/harrior/Wiper - My first C# experience. This tool using for remove data from computer without chance to reсovery.  
* https://github.com/harrior/Ilchenko_project - This is my first commercial project (2017 year) for OOO "Skiit". This is a tool for convert data of seismic research to human-oriented view. (Delphi)  
* https://github.com/harrior/TB-SQLi-Shell-demo - *That's my favorite child :)* Simple tool for Blind SQL Injection exploitation demonstration with Python and requests.  

## Education and Science  
Since 2019 I have been teaching at PGU (https://pgu.ru/) the disciplines "Modern Programming Languages", "Technologies and Programming Methods" for bachelors.  
2016-2020 Graduated from the postgraduate study of the SFedU (https://sfedu.ru/). The topic of the graduation diploma is "Modeling of hydrolithospheric processes using machine learning methods".  
Graduated from PSTU University (now NCFU - www.ncfu.ru) with a degree in Control and Informatics in Technical Systems in 2010.  
Author of a number of publications in peer-reviewed Russian and international scientific publications  

## English level  
My English level is **A2\B1**